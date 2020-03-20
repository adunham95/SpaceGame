import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, useLocation, Switch} from "react-router-dom";
import CaptainsLog from './Pages/CaptainsLog';
import {ScrollToTop, Header, Nav} from "./Components/index"
import MissionControl from './Pages/HabRooms/MissionControl';
import Garage from './Pages/HabRooms/Garage';
import Hab, {DefaultHabRoom, NewHabRoom} from './Pages/Hab';
import Rover, {NewRover} from "./Pages/Rover";
import Settings from './Pages/Settings';
import Workshop, {WorkshopBuilder} from "./Pages/HabRooms/Workshop";
import Garden from './Pages/HabRooms/Gardens';


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
        <Route exact path="/settings" children={<Settings/>} />
        
        <Route exact path="/hab" children={<Hab />} />
        <Route path="/hab/new" children={<NewHabRoom/>} />
        <Route path="/hab/missionControl/:roomID" children={<MissionControl/>} />
        <Route path="/hab/garage/:roomID" children={<Garage/>} />
        <Route path="/hab/workshop/:roomID" children={<Workshop/>} />
        <Route path="/hab/garden/:roomID" children={<Garden/>} />
        <Route path="/hab/:roomType/:roomID" children={<DefaultHabRoom />} />

        <Route path="/rover/:roverID" children={<Rover/>}/>
      </Switch>

      {/* Show the modal when a background page is set */}
      {/* {background && <Route path="/rover/new" children={<NewRover/>} />} */}
    </div>
  );
  
}

export default App;
