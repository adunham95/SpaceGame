import React, {useState, useEffect} from 'react';
import {getRoomById} from "../../Functions/habDB";
import {useParams} from "react-router-dom";
import Rover, { NewRover } from '../Rover';

function Garage() {
  let {roomID} = useParams();
  const [room, setRoom] = useState({id: "",title: "", type: "",length: 1});

  useEffect(()=>{
      setRoom(getRoomById(roomID));
  },{})

  return (
    <div className="page missionControl">
        <h1>Garage</h1>
        <h3>Room ID: {room.id}</h3>
        {room.roverId}
        {
            typeof room.roverID === "undefined" ?  <NewRover garageID={roomID}/> : <Rover roverID={room.roverID} /> 
        }
    </div>
  );
}


export default Garage;