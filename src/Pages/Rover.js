import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getRovers} from "../Functions/roverDB"

function Rover() {
  let {roverID} = useParams();
  const [rover, setRover] = useState({id:"",name:""});

  useEffect(()=>{
    //   setRoom(getRoverById(roverID));
  },{})

  return (
    <div className="page rover">
        <h1>Name {rover.name}</h1>
    </div>
  );
}

function NewRover() {
    
    useEffect(()=>{
        // console.log(getRovers())
      //   setRoom(getRoverById(roverID));
    },{})
  
    return (
      <div className="page rover rover-new">
      </div>
    );
  }


export default Rover;
export {NewRover};
