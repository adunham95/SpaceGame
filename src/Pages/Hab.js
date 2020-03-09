import React, {useState, useEffect} from 'react';
import "./PageStyles/hab.scss";
import {AspectRatio} from "../Components/index";
import {Link, useParams} from "react-router-dom";
import {getHabRooms, getRoomById, getHabRoomTypes} from "../Functions/habDB";

function Hab() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        let rooms = getHabRooms();
        let habTypes = getHabRoomTypes();
        
        //Sets the color 
        rooms.forEach(r => {
            let habIndex = habTypes.findIndex(hr => {
                return hr.type === r.type;
            });
            r.color = habTypes[habIndex].color
        })
        console.log(rooms);
        setRooms(rooms);
    },[])

  return (
    <div className="page hab">
        <h1>Hab</h1>
        <span>Testing</span>
        <div className="roomsContainer">
            {
                rooms.map(r => {
                // return <Link to={`hab/type/${r.id}`} className={`room ${r.type} width-${r.length}`}>
                return <Link to={`hab/${r.type}/${r.id}`} 
                    className={`room ${r.type} width-${r.length}`} 
                    style={{"--roomColor":r.color}}>
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

function DefaultHabRoom(){
    let {roomID} = useParams();
    const [room, setRoom] = useState({id: "",title: "", type: "",length: 1})

    useEffect(()=>{
        setRoom(getRoomById(roomID));
    },{})

    return (
        <div className={`page hab ${room.type}`}>
            <h1>Hab Room id:{roomID}</h1>
            <h2>{room.title}</h2>
        </div>
      );
}


export default Hab;
export {DefaultHabRoom};