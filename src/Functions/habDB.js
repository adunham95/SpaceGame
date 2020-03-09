import {habRooms} from "../Data/HabRooms"

export function getHabRooms(){
    return JSON.parse(localStorage.getItem("hab"));
}

export function getRoomById(id){
    let allRooms = getHabRooms();
    console.log(allRooms);
    console.log(id);
    let roomIndex = allRooms.findIndex(r => {
        return r.id === id
    })
    return allRooms[roomIndex]
}

export function getRoomsByType(type){
    let allRooms = getHabRooms();
    console.log(allRooms);
}

export function getHabRoomTypes(){
    return habRooms;
}

export function createRoom({id, type, title, length=1}={}){

}