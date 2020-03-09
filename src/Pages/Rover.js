import React, {useState, useEffect} from 'react';
import "./PageStyles/rover.scss";
import {useParams} from "react-router-dom";
import {getRovers} from "../Functions/roverDB";
import {roverTypes} from "../Data/RoverStuff"
import Input, {Submit, Select} from "../Components/Input/input";

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

function NewRover({garageID}) {

    const [roverName, setRoverName] = useState("");
    const [roverType, setRoverType] = useState("");

  
    const handleRoverTypeChange = (e) =>{
        console.log(e);
        let i = roverTypes.findIndex(r => r.id === e);
        setRoverType(roverTypes[i]);
    }

    const createRover = (e) =>{
        e.preventDefault();
        console.log("rover name", roverName);
        console.log("Rover Type", roverType);
        console.log("garageID", garageID)
    }

    return (
      <div className="page rover rover-new">
          <h4>Create New Rover</h4>
          <form onSubmit={(e)=>createRover(e)} className="rover-new-form">
            <Input 
                id="roverName"
                label="Rover Name"
                placeholder="Red Rover"
                onChange={(e)=>setRoverName(e)}
            />
            <Select id="roverType"
                    label="Rover Type"
                    onChange={(e)=>handleRoverTypeChange(e)}>
                        <option value="">Select Rover Type</option>
                {
                    roverTypes.map(rO => {
                        return <option value={rO.id}>{rO.name}</option>
                    })
                }
            </Select>
            <Submit>Save</Submit>
          </form>
      </div>
    );
  }


export default Rover;
export {NewRover};
