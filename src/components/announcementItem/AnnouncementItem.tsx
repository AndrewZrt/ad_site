import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "../announcementItem/AnnouncementItem.css";

import { IAnnouncement } from "../../models/IAnnouncement";

export interface IData {
  post: IAnnouncement;
}

const AnnouncementItem: React.FC<IData> = ({ post }: IData) => {
  return (
    <Card className={"container_item"}>
      <Card.Body>
        <span>Title:</span>
        <Card.Title>{post.title}</Card.Title>
        <span>Description:</span>
        <Card.Title>{post.description}</Card.Title>
      </Card.Body>

      <Link
        to={`/details/post/${post.id}`}
        state={post.id}
        className={"cursor_auto"}
      >
        <button className="btn  btn-warning btn_sd but">Show details</button>
      </Link>
    </Card>
  );
};
export default AnnouncementItem;
