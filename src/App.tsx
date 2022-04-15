import React from 'react';
import NavBar from "./components/header/NavBar";
import RoutingConfig from "./routing/Routing";

const App:React.FunctionComponent = () =>{
  return (
    <div>
      <NavBar/>
      <RoutingConfig/>
    </div>
  );
}

export default App;
