import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { IAnnouncement } from "../../models/IAnnouncement";
import AnnouncementItem from "../announcementItem/AnnouncementItem";

const List: React.FunctionComponent = () => {
  const { announcements } = useAppSelector((state) => state.mainReducer);
  return (
    <div className={"container_items"}>
      {announcements.map((post: IAnnouncement) => (
        <AnnouncementItem key={post.id} post={post} />
      ))}
    </div>
  );
};
export default List;
