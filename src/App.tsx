import React from "react";
import NavBar from "./components/header/NavBar";
import RoutingConfig from "./routing/Routing";

import { Container } from "react-bootstrap";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Container>
        <RoutingConfig />
        <ScrollButton />
      </Container>
    </>
  );
};

export default App;
