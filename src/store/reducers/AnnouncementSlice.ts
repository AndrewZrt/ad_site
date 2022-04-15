import {IAnnouncement} from "../../models/IAnnouncement";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
    announcements: IAnnouncement[];
    isLoading:boolean;
    addModal: boolean,
    editModal: boolean
}

const initialState:State ={
    announcements: [],
    isLoading: false,
    addModal: false,
    editModal: false
}

export const announcementSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        addModalActive(state,action:PayloadAction<boolean>){
            state.addModal=action.payload
        }
    }
})

export default announcementSlice.reducer
export const {addModalActive} = announcementSlice.actions