import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

import "../addAnnouncement/AddItem.css";

import { useAppDispatch } from "../../hooks/redux";
import { addNewAnnouncement } from "../../store/reducers/AnnouncementSlice";

const AddItem: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const cleanFields = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = () => {
    if (title && description) {
      const date = new Date().toDateString();

      dispatch(addNewAnnouncement({ title, description, date }));
      navigate("/");
    }
  };
  return (
    <div className={"wrapper"}>
      <Form className={"container_form "}>
        <Form.Control
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="Title"
          className={"my-2"}
        />

        <Form.Control
          as="textarea"
          placeholder="Add description..."
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
          className={"my-2"}
        />

        <Container className={"add_buttons add "}>
          <button
            className="btn btn-success px-3 mt-3 "
            disabled={!title || !description}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleSubmit();
              cleanFields();
            }}
          >
            Post your announcement
          </button>

          <button
            className="btn btn-secondary px-4 mt-3 m "
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              cleanFields();
              navigate("/");
            }}
          >
            Back to the list
          </button>
        </Container>
      </Form>
    </div>
  );
};
export default AddItem;
