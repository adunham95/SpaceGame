import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, useLocation, Switch} from "react-router-dom";
import CaptainsLog from './Pages/CaptainsLog';
import {ScrollToTop, Header, Nav} from "./Components/index"
import MissionControl from './Pages/HabRooms/MissionControl';
import Hab, {DefaultHabRoom} from './Pages/Hab';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Nav />
        <ScrollToTop/>
        <ModalSwitch/>
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
        <Route exact path="/" children={<CaptainsLog/>} />
        
        <Route exact path="/hab" children={<Hab />} />
        <Route path="/hab/missionControl/:roomID" children={<MissionControl/>} />
        <Route path="/hab/type/:roomID" children={<DefaultHabRoom />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {/* {background && <Route path="/new/:type" children={<ModalPage/>} />} */}
    </div>
  );
  
}

export default App;
