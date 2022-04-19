import React from "react";
import {useAppSelector} from "../../hooks/redux";
import { IAnnouncement } from "../../models/IAnnouncement";
import AnnouncementItem from "../announcementItem/AnnouncementItem";

const SimilarPosts:React.FunctionComponent = () => {
    const {similarPosts} = useAppSelector((state => state.mainReducer))
    return(
         <div className={"container_items"}>
             {
                 similarPosts.map((post:IAnnouncement) => <AnnouncementItem key={post.id} post={post}/> )
             }
         </div>
             );
 }
 export default SimilarPosts