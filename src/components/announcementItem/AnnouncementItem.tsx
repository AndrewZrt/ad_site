import React from "react";
import {Card} from "react-bootstrap";

import {IAnnouncement} from "../../models/IAnnouncement";
import '../announcementItem/AnnouncementItem.css'
import {Link} from "react-router-dom";

interface IData {
    post: IAnnouncement
}

const AnnouncementItem:React.FC<IData> = ({post}:IData) => {


    return(


        <Card className={"container_item"}>
            <Card.Body>
                <span>Title:</span>
                <Card.Title>{post.title}</Card.Title>
                <span>Description:</span>
                <Card.Title>{post.description}</Card.Title>
            </Card.Body>

            <Link to={`/details/post/${post.id}`} state={post.id}>
                <button className="btn  btn-warning btn_sd ">Show details</button>
            </Link>


        </Card>



             );
 }
 export default AnnouncementItem