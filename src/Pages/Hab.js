import React, {useState} from 'react';
import "./PageStyles/hab.scss";
import {AspectRatio} from "../Components/index";
import {Link} from "react-router-dom";

let roomsDefault = [
    {
        id: "0001",
        title: "Mission Control", 
        type: "missionControl",
        length: 2
    },
    {
        id: "0002",
        title: "Garden", 
        type: "garden",
        length: 1
    },
    {
        id: "0002",
        title: "Bedroom", 
        type: "bed",
        length: 1
    },
    {
        id: "0003",
        title: "Garage", 
        type: "garage",
        length: 1
    },
    {
        id: "0004",
        title: "Communication", 
        type: "comm",
        length: 2
    },
]

localStorage.setItem("hab", JSON.stringify(roomsDefault));

function Hab() {


    const [rooms, setRooms] = useState(roomsDefault)


  return (
    <div className="page hab">
        <h1>Hab</h1>
        <span>Testing</span>
        <div className="roomsContainer">
            {
                rooms.map(r => {
                return <Link to={`hab/${r.id}`} className={`room ${r.type} width-${r.length}`}>
                    <AspectRatio
                        ratio={`${r.length}x1`}
                        className={r.type}
                    ></AspectRatio>
                    <h3>{r.title}</h3>
                </Link>
                })
            }
        </div>
    </div>
  );
}


export default Hab;