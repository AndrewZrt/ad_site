import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  deletePost,
  setSimilarPosts,
} from "../../store/reducers/AnnouncementSlice";
import { ILocationState } from "../../models/ILocationState";

import { Card, Container } from "react-bootstrap";
import "../details/Details.css";


const Details: React.FunctionComponent = () => {
  const { announcements } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as ILocationState;

  const post: any = announcements.find((value) => value.id === state);

  function deleteFunc(id?: string) {
    const newList = [...announcements].filter((value) => value.id !== id);
    dispatch(deletePost(newList));
  }

  const postSplitTitle = post.title.toLowerCase().replace(",", " ").split(" ");
  const postSplitDesc = post.description
    .toLowerCase()
    .replace(",", " ")
    .split(" ");

  function findSimilar() {
    const similarList = announcements
      .filter((value) => {
        const title = value.title.toLowerCase().replace(",", " ").split(" ");
        const desc = value.description
          .toLowerCase()
          .replace(",", " ")
          .split(" ");
        const someTitle = title.some((value1) =>
          postSplitTitle.includes(value1)
        );
        const someDesc = desc.some((value1) => postSplitDesc.includes(value1));
        return someTitle && someDesc && value.id !== post.id;
      })
      .slice(0, 3);
    dispatch(setSimilarPosts(similarList));
  }

  return (
    <div>
      <Card className={"container_item"}>
        <Card.Body>
          <Card.Text>Title: {post.title}</Card.Text>
          <Card.Text>Description: {post.description}</Card.Text>
          <Card.Text>Date of creation: {post.date}</Card.Text>
        </Card.Body>
        <Container className={"edit_buttons"}>
          <Link to={`/edit/post/${post.id}`} state={post.id}>
            <button className="btn btn-success px-4 btn_dt ">Edit</button>
          </Link>
          <button
            className="btn btn-danger px-3 btn_dt "
            onClick={() => {
              deleteFunc(post.id);
              navigate("/");
            }}
          >
            Delete
          </button>

          <Link to={`/similarPosts`}>
            <button
              className="btn btn-secondary px-3 btn_dt "
              onClick={() => {
                findSimilar();
              }}
            >
              {" "}
              Show top 3 similar
            </button>
          </Link>
          <button
            className="btn btn-secondary px-3 btn_dt "
            onClick={() => navigate("/")}
          >
            Go back to the list
          </button>
        </Container>
      </Card>
    </div>
  );
};


export default Details