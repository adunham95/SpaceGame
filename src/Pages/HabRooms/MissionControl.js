import React, {useState, useEffect} from 'react';
import {getRoomById} from "../../Functions/habDB";
import {useParams} from "react-router-dom";

function MissionControl() {
  let {roomID} = useParams();
  const [room, setRoom] = useState({id: "",title: "", type: "",length: 1});
  const [envOut, setOutsideEnviroment] = useState({temp: 0, rad: 0, humidity: 0, wind: 0})
  const [envIn, setInsideEnviroment] = useState({temp: 0, rad: 0, humidity: 0})

  useEffect(()=>{
      setRoom(getRoomById(roomID));
  },{})

  return (
    <div className="page missionControl">
        <h1>Mission Control</h1>
        <h3>Room ID: {room.id}</h3>
        <div className="stats">
          <div>
            <h2>Outside</h2>
            <div>Temperature {envOut.temp}</div>
            <div>Radiation {envOut.rad}</div>
            <div>Humidity {envOut.humidity}</div>
          </div>
          <div>
            <h2>Inside</h2>
            <div>Temperature {envIn.temp}</div>
            <div>Radiation {envIn.rad}</div>
            <div>Humidity {envIn.humidity}</div>
          </div>
        </div>
    </div>
  );
}


export default MissionControl;
