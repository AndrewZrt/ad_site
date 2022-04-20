import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFilteredPosts } from "../../store/reducers/AnnouncementSlice";

import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import "../header/NavBar.css";
import "../media.css";

import { IAnnouncement } from "../../models/IAnnouncement";

const NavBar: React.FunctionComponent = () => {
  const { announcements } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");

  const filteredPosts: IAnnouncement[] = announcements.filter((item) => {
    return item.title.toLowerCase().includes(title.toLowerCase());
  });

  return (
    <>
      <Navbar
        expand={"sm"}
        bg=" p-2 pb-3 bg-secondary"
        variant="dark"
        sticky="top"
      >
        <Container className={"px-0 mt-2 nav"}>
          <Link to={"/"} className="navbar-brand brand-text">
            List of announcements
          </Link>
          <Form className=" input form">
            <FormControl
              type="search"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              placeholder="Search by title"
            />
            <Link to={`/filtered`}>
              <Button
                variant="success"
                onClick={() => {
                  dispatch(setFilteredPosts(filteredPosts));
                  setTitle("");
                }}
              >
                Search
              </Button>
            </Link>
          </Form>
          <Link to={"/add"} className="navbar-brand brand-text">
            Add announcement
          </Link>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
