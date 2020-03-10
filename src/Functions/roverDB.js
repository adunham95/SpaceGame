import { generateID } from "./functions";
import { updateRoomById} from "./habDB";
import { roverTypes, roverSlots } from "../Data/RoverStuff";

function saveRoverDB(roverList){
    localStorage.setItem("rover",JSON.stringify(roverList));
}

export function getRovers(){
    console.log(localStorage.getItem("rover") !== null);
    if(localStorage.getItem("rover") === null){return []}
    else{return JSON.parse(localStorage.getItem("rover"))};
}

export function getRoverIndexById(id){
    let allRovers = getRovers();
    let roverIndex = allRovers.findIndex(r => {
        return r.id === id
    })
    return roverIndex
}

export function getRoverByID(id){
    //Get all the rovers
    let allRovers = getRovers();
    //Get the rover
    let rover = allRovers[getRoverIndexById(id)];
    let slotsUsed = 0;
    
    //Add the slots
    rover.slotsOnRover = rover.slotsOnRover.map(s => {
        let slot = roverSlots.find(rs => rs.slot_id === s.slot_id);
        slotsUsed += slot.slotCost;
        return {...s, ...slot} 
    });

    //Get the index of rover types
    let roverTypeIndex = roverTypes.findIndex(t => {
        return t.type_id === rover.typeID
    });

    //Merge the rover type object and the rover object
    return {...roverTypes[roverTypeIndex],...rover, slotsUsed};
}

export function newRover({typeID, name, garageID}={}){
    let rovers = getRovers();
    console.log(rovers);

    //Create the new rover
    let newRover = {
        id: generateID(4),
        typeID: typeID,
        name, 
        garageID,
        slotsOnRover: [],
        charge: 100,
    };

    //Update the garage to set the rover
    updateRoomById(garageID, "roverID", newRover.id);
    
    rovers.push(newRover);
    saveRoverDB(rovers);
}