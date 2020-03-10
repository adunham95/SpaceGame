import {habRooms} from "../Data/HabRooms"

export function getHabRooms(){
    if(JSON.parse(localStorage.getItem("hab")) === null){return []}
    else{return JSON.parse(localStorage.getItem("hab"))};
}

function saveHabDB(roomList){
    localStorage.setItem("hab",JSON.stringify(roomList));
}

export function getRoomById(id){
    let allRooms = getHabRooms();
    console.log(allRooms);
    console.log(id);
    return allRooms[getRoomIndexById(id)]
}

export function getRoomIndexById(id){
    let allRooms = getHabRooms();
    console.log(allRooms);
    console.log(id);
    let roomIndex = allRooms.findIndex(r => {
        return r.id === id
    })
    return roomIndex
}

export function updateRoomById(id, key, value){
    let allRooms = getHabRooms();
    let room = allRooms[getRoomIndexById(id)];
    console.log(room);
    room[key] = value;
    saveHabDB(allRooms);
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