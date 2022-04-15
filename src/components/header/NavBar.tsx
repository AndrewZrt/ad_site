import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar:React.FunctionComponent = () => {
     return(
     <div>
         <Navbar className={" navbar navbar-expand-sm "} bg="p-3 mb-2 bg-secondary" variant="dark" fixed="top">
             <Container className={"px-0"}>
                 <Nav.Link> <Link to={'/'} className="navbar-brand" >List of announcements</Link></Nav.Link>
                 <Form className="">
                     <FormControl
                         type="search"
                         placeholder="Search by title"
                     />
                 </Form>
             </Container>

         </Navbar>
     </div>
             );
 }
 export default NavBar