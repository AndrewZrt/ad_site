import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { IAnnouncement } from "../../models/IAnnouncement";
import AnnouncementItem from "../announcementItem/AnnouncementItem";

import "../similarPosts/SimilarPosts.css";

const SimilarPosts: React.FunctionComponent = () => {
  const { similarPosts } = useAppSelector((state) => state.mainReducer);
  return (
    <div className={"container_items"}>
      <h5 style={{ textAlign: "center", padding: "15px 0 7px 0" }}>
        Top 3 similar posts
      </h5>
      {similarPosts.length > 0 ? (
        similarPosts.map((post: IAnnouncement) => (
          <AnnouncementItem key={post.id} post={post} />
        ))
      ) : (
        <div id={"div"}>
          <h6 style={{ textAlign: "center" }}>There are no similar ads!</h6>
        </div>
      )}
    </div>
  );
};
export default SimilarPosts;
