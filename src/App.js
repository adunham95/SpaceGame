import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, useLocation, Switch} from "react-router-dom";
import CaptainsLog from './Pages/CaptainsLog';
import {ScrollToTop} from "./Components/index"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <ScrollToTop/>
        <ModalSwitch/>
        {/* <Nav /> */}
      </Router>
    <div id="modal-root"></div>
    </div>
  );
}

function ModalSwitch(){
  let location = useLocation();
  let background = location.state && location.state.background;
  console.log("background",background);

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<CaptainsLog />} />
        {/* <Route path="/new/:type" children={<NewGame />} /> */}
      </Switch>

      {/* Show the modal when a background page is set */}
      {/* {background && <Route path="/new/:type" children={<ModalPage/>} />} */}
    </div>
  );
  
}

export default App;
