import React, {useState} from 'react';
import "./PageStyles/hab.scss";
import {AspectRatio} from "../Components/index";

let roomsDefault = [
    {
        title: "Mission Control", 
        type: "missionControl",
        length: 2
    },
    {
        title: "Garden", 
        type: "garden",
        length: 1
    },
    {
        title: "Bedroom", 
        type: "bed",
        length: 1
    },
    {
        title: "Garage", 
        type: "garage",
        length: 1
    },
    {
        title: "Comms", 
        type: "comm",
        length: 2
    },
]

function Hab() {


    const [rooms, setRooms] = useState(roomsDefault)


  return (
    <div className="page hab">
        <h1>Hab</h1>
        <span>Testing</span>
        <div className="roomsContainer">
            {
                rooms.map(r => {
                return <div className={`room ${r.type} width-${r.length}`}>
                    <AspectRatio
                        ratio={`${r.length}x1`}
                        className={r.type}
                    ></AspectRatio>
                    <h3>{r.title}</h3>
                </div>
                })
            }
        </div>
    </div>
  );
}


export default Hab;