import React from "react";
import {IAnnouncement} from "../../models/IAnnouncement";
import AnnouncementItem from "../announcementItem/AnnouncementItem";
import {useAppSelector} from "../../hooks/redux";

const SearchPosts:React.FunctionComponent = () => {
    const {filteredPosts} = useAppSelector((state => state.mainReducer))
    return(
         <div className={"container_items"}>
             {
                 filteredPosts.map((post:IAnnouncement) => <AnnouncementItem key={post.id} post={post}/> )
             }
         </div>
             );
 }
 export default SearchPosts