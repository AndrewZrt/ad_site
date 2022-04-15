import React from "react";
import {Route, Routes} from "react-router-dom";
import List from "../components/listOfAnnouncement/List";
import AddItem from "../components/addAnnouncement/AddItem";
import EditItem from "../components/editAnnouncement/EditItem";


const RoutingConfig: React.FunctionComponent =()=> {
    return(
    <div>
        <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='/add' element={<AddItem/>}/>
            <Route path='/edit' element={<EditItem/>}/>
        </Routes>
    </div>
            );
}

export default RoutingConfig