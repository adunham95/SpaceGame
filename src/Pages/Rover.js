import React, {useState, useEffect} from 'react';
import "./PageStyles/rover.scss";
import {useParams} from "react-router-dom";
import {getRovers, newRover, getRoverByID} from "../Functions/roverDB";
import {roverTypes} from "../Data/RoverStuff"
import Input, {Submit, Select} from "../Components/Input/input";
import { BatteryLevel } from '../Components';

function Rover({roverID, charging=false}) {
  // let {roverID} = useParams();
  const [rover, setRover] = useState({id:"",name:"", slots: 0, slotsUsed:0, charge: 100});

  useEffect(()=>{
    console.log(roverID);
    console.log(getRoverByID(roverID));
    setRover(getRoverByID(roverID));
  },{})

  return (
    <div className="page rover">
        <h1>{rover.name}</h1>
        <BatteryLevel charge={rover.charge}/>
        <p>Slots Avalible {rover.slots - rover.slotsUsed}</p>
        <p>Total Slots {rover.slots}</p>
        <div>

        </div>
    </div>
  );
}

function NewRover({garageID}) {

    const [roverName, setRoverName] = useState("");
    const [roverType, setRoverType] = useState("");

  
    const handleRoverTypeChange = (e) =>{
        console.log(e);
        let i = roverTypes.findIndex(r => r.type_id === e);
        setRoverType(roverTypes[i]);
    }

    const createRover = (e) =>{
      e.preventDefault();
      console.log("rover name", roverName);
      console.log("Rover Type", roverType);
      console.log("garageID", garageID);

      newRover({typeID: roverType.type_id, name: roverName, garageID});
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
                        return <option value={rO.type_id}>{rO.type_name}</option>
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
