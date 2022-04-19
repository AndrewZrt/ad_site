import React from "react";
import { Route, Routes } from "react-router-dom";

import List from "../components/listOfAnnouncement/List";
import AddItem from "../components/addAnnouncement/AddItem";
import EditItem from "../components/editAnnouncement/EditItem";
import Details from "../components/details/Details";
import SearchPosts from "../components/searchBlock/SearchPosts";
import SimilarPosts from "../components/similarPosts/SimilarPosts";

const RoutingConfig: React.FunctionComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/post/:id" element={<EditItem />} />
        <Route path="/details/post/:id" element={<Details />} />
        <Route path="/filtered" element={<SearchPosts />} />
        <Route path="/similarPosts" element={<SimilarPosts />} />
      </Routes>
    </div>
  );
};

export default RoutingConfig;
