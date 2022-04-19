import {Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useLocation, useNavigate} from "react-router-dom";
import {ILocationState} from "../../models/ILocationState";
import {setEditedPost} from "../../store/reducers/AnnouncementSlice";

const EditItem:React.FunctionComponent = () => {
    const {announcements} = useAppSelector((state => state.mainReducer))
    const dispatch = useAppDispatch()

    const location = useLocation();
    const state = location.state as ILocationState

    const navigate = useNavigate()

    const currentPost:any = announcements.find(value => value.id === state)  //!!!!!!!!!!!!!!!!!!!!!!



    const [newTitle, setNewTitle] = useState <string> (currentPost.title)
    const [newDescription, setNewDescription] = useState<string> (currentPost.description)






    const handleSubmit = ()=>{
        if (!newTitle || !newDescription) return;
        const date = new Date().toDateString()
        const object={id:currentPost.id, title:newTitle,description:newDescription,date:date}
        dispatch(setEditedPost(object))
        navigate('/')


    }
    return(

         <div className={"wrapper"}>

             <Form className={"container_form"} >

                 <Form.Control
                     value={newTitle}
                     onChange={({target: {value}}) => setNewTitle(value)}
                     placeholder="Title"
                     className={"my-2"}
                 />

                 <Form.Control
                     as="textarea"
                     placeholder="Add description..."
                     value={newDescription}
                     onChange={({target: {value}}) => setNewDescription(value)}
                     className={"my-2"}
                 />


                 <Container className={"add_buttons"}>
                     <button
                         className="btn btn-success px-3 mt-3 "
                         disabled={!newTitle || !newDescription }
                         onClick={(e: React.MouseEvent)=>{
                               e.preventDefault()
                                handleSubmit()
                         }}
                     >Submit changes</button>

                     <button
                         className="btn btn-secondary px-3 mt-3 "
                         onClick={(e: React.MouseEvent)=>{
                             e.preventDefault()
                             navigate(-1)
                         }}
                     >Go back</button>
                 </Container>

             </Form>
         </div>
             );
 }
 export default EditItem