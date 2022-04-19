import {v4 as uuidv4} from 'uuid';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IAnnouncement} from "../../models/IAnnouncement";

interface State {
    announcements: IAnnouncement[];
    filteredPosts: IAnnouncement[];
    similarPosts:IAnnouncement[]
}

const initialState:State ={
    announcements: [],
    filteredPosts:[],
    similarPosts:[]


}

const announcementSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        addNewAnnouncement(state,action:PayloadAction<IAnnouncement>){
            state.announcements.push({
                id:uuidv4(),
                ...action.payload
            })
        },
        deletePost(state,action:PayloadAction<IAnnouncement[]>){
            state.announcements=action.payload
        },
        setFilteredPosts(state,action:PayloadAction<IAnnouncement[]>){
            state.filteredPosts=action.payload
        },
        setSimilarPosts(state,action:PayloadAction<IAnnouncement[]>){
            state.similarPosts=action.payload
        },
        setEditedPost(state,action:PayloadAction<IAnnouncement>){
            state.announcements=state.announcements.map(el => el.id === action.payload.id ? action.payload : el)
        }



    }
})

export default announcementSlice.reducer
export const {addNewAnnouncement,deletePost,setFilteredPosts,setSimilarPosts,setEditedPost} = announcementSlice.actions