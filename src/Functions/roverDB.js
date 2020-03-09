function saveRoverDB(roverList){

}

export function getRovers(){
    console.log(localStorage.getItem("rover") !== null);
    if(localStorage.getItem("rover") === null){return []}
    else{return JSON.parse(localStorage.getItem("rover"))};
}

export function getRoverIndexByID(id){
    // return JSON.parse(localStorage.getItem("rover"));
    return "Working on"
}

export function getRoverByID(id){
    // return JSON.parse(localStorage.getItem("rover"));
    return "Working on"
}

export function newRover({type, name, length=1}={}){
    let rovers = getRovers();
    console.log(rovers);
}