import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "../details/Details.css";

import {
  deletePost,
  setSimilarPosts,
} from "../../store/reducers/AnnouncementSlice";
import SimilarPosts from "../similarPosts/SimilarPosts";
import { IAnnouncement } from "../../models/IAnnouncement";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Details: React.FunctionComponent = () => {
  const { announcements } = useAppSelector((state) => state.mainReducer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    findSimilarPosts();
  });

  const foundPost: IAnnouncement = announcements.find((value) => value.id === location.state)!;

  function deletePostById(id: string) {
    const filteredList = announcements.filter((value) => value.id !== id);

    dispatch(deletePost(filteredList));
  }

  function split(postProperty: string, separator = " ") {
    return postProperty.toLowerCase().replace(",", " ").split(separator);
  }

  function findSimilarPosts() {
    const foundPostTitleElements = split(foundPost.title);
    const foundPostDescriptionElements = split(foundPost.description);

    const similarList = announcements
      .filter((post) => {
        const postTitleElements = split(post.title);
        const postDescriptionElements = split(post.description);

        const someTitle = postTitleElements.some((el) =>
          foundPostTitleElements.includes(el)
        );

        const someDesc = postDescriptionElements.some((el) =>
          foundPostDescriptionElements.includes(el)
        );

        return someTitle && someDesc && post.id !== foundPost.id;
      })
      .slice(0, 3);

    dispatch(setSimilarPosts(similarList));
  }

  return (
    <div>
      <Card className={"container_item"}>
        <Card.Body>
          <Card.Text>Title: {foundPost.title}</Card.Text>
          <Card.Text>Description: {foundPost.description}</Card.Text>
          <Card.Text>Date of creation: {foundPost.date}</Card.Text>
        </Card.Body>
        <Container className={"edit_buttons"}>
          <Link to={`/edit/post/${foundPost.id}`} state={foundPost.id}>
            <button className="btn btn-success px-4 btn_dt ">Edit</button>
          </Link>
          <button
            className="btn btn-danger px-3 btn_dt "
            onClick={() => {
              deletePostById(foundPost.id!);
              navigate("/");
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary px-3 btn_dt "
            onClick={() => navigate("/")}
          >
            Go back to the list
          </button>
        </Container>
      </Card>
      <SimilarPosts />
    </div>
  );
};

export default Details;
