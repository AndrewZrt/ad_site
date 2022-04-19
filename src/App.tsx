import React from 'react';
import NavBar from "./components/header/NavBar";
import RoutingConfig from "./routing/Routing";

import {Container} from "react-bootstrap";

    const App: React.FunctionComponent = () => {
        return (
            <>
                <NavBar/>
                <Container>
                    <RoutingConfig/>
                </Container>
            </>
        );
    }

    export default App;
