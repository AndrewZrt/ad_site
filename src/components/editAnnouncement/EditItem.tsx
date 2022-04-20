import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setEditedPost } from "../../store/reducers/AnnouncementSlice";
import { IAnnouncement } from "../../models/IAnnouncement";

const EditItem: React.FunctionComponent = () => {
  const { announcements } = useAppSelector((state) => state.mainReducer);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const currentPost: IAnnouncement = announcements.find((value) => value.id === location.state)!;

  const [newTitle, setNewTitle] = useState<string>(currentPost.title);
  const [newDescription, setNewDescription] = useState<string>(currentPost.description);

  const handleSubmit = () => {
    const date = new Date().toDateString();

    dispatch(setEditedPost({
      id: currentPost.id,
      title: newTitle,
      description: newDescription,
      date: date
    }));
  };
  return (
    <div className={"wrapper"}>
      <Form className={"container_form"}>
        <Form.Control
          value={newTitle}
          onChange={({ target: { value } }) => setNewTitle(value)}
          placeholder="Title"
          className={"my-2"}
        />

        <Form.Control
          as="textarea"
          placeholder="Add description..."
          value={newDescription}
          onChange={({ target: { value } }) => setNewDescription(value)}
          className={"my-2"}
        />

        <Container className={"add_buttons"}>
          <button
            className="btn btn-success px-3 mt-3 "
            disabled={!newTitle || !newDescription}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleSubmit();
              navigate(-1);
            }}
          >
            Submit changes
          </button>

          <button
            className="btn btn-secondary px-3 mt-3 "
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Go back
          </button>
        </Container>
      </Form>
    </div>
  );
};
export default EditItem;
