import React, {useState, useEffect} from 'react';
import {getRoomById} from "../../Functions/habDB";
import {useParams} from "react-router-dom";
import { NewRover } from '../Rover';

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
            typeof room.roverId === "undefined" ? <>No Rover <NewRover garageID={roomID}/></> : "Show Rover" 
        }
    </div>
  );
}


export default Garage;