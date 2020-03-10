import React, {useState, useEffect} from 'react';
import "./PageStyles/hab.scss";
import {AspectRatio} from "../Components/index";
import {Link, useParams} from "react-router-dom";
import {getHabRooms, getRoomById, getHabRoomTypes, createRoom} from "../Functions/habDB";
import Input, {Submit, Select} from "../Components/Input/input";

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
            <Link to={`hab/new`} 
                    className={`room width-1`} 
                    style={{"--roomColor":"green"}}>
                    <AspectRatio
                        ratio={`1x1`}
                    ></AspectRatio>
                    <h3>New Room</h3>
                </Link>
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

function NewHabRoom(){
    const [roomName, setRoomName] = useState("");
    const [roomType, setRoomType] = useState("")

    const handleRoomTypeChange = (e) =>{
        console.log(e);
        setRoomType(getHabRoomTypes().find(r => r.type === e));
    }

    const saveRoom = (e) =>{
        e.preventDefault();
        console.log("Room name", roomName);
        console.log("Room Type", roomType);

        createRoom({type: roomType.type, title: roomName, length:1})
    }

    return (
        <div className={`page hab newRoom`}>
            <h1>New Room</h1>
            <form onSubmit={(e)=>{saveRoom(e)}}>
                <Input 
                    id="roomName"
                    label="Room Name"
                    onChange={(e)=>setRoomName(e)}
                />
                <Select id="roverType"
                        label="Rover Type"
                        onChange={(e)=>handleRoomTypeChange(e)}>
                            <option value="">Select Room Type</option>
                    {
                        getHabRoomTypes().map(rO => {
                            return <option value={rO.type}>{rO.name}</option>
                        })
                    }
                </Select>
                <Submit>Save</Submit>
            </form>
        </div>
      );
}


export default Hab;
export {DefaultHabRoom, NewHabRoom};