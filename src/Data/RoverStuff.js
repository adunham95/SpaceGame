export const roverTypes = [
    {type_id: "atv_land", type_name: "ATV", lifeSupport: false, 
    seats: 1, slots: 1,storage:0,energy:5,motors:1,wheels:4,type: "Land"},

    {type_id: "moto_land", type_name: "Motorcycle", lifeSupport: false, 
    seats: 1, slots: 0,storage:0,energy:5,motors:1,wheels:2,type: "Land"},

    {type_id: "exSmall_land", type_name: "Extra Small", lifeSupport: true, 
    seats: 2, slots: 1,storage:0,energy:5,motors:1,wheels:4,type: "Land"},

    {type_id: "small_land",type_name: "Small", lifeSupport: true, 
    seats: 1, slots: 3,storage:0,energy:10,motors:2,wheels:4,type: "Land"},

    {type_id: "medium_land",type_name: "Medium", lifeSupport: true, 
    seats: 2, slots: 5,storage:0,energy:15,motors:2,wheels:4,type: "Land"},

    {type_id: "large_land",type_name: "Large", lifeSupport: true, 
    seats: 2, slots: 7,storage:0,energy:30,motors:4,wheels:6,type: "Land"},

    {type_id: "exLarge_land",type_name: "Extra Large", lifeSupport: true, 
    seats: 2, slots: 10,storage:0,energy:50,motors:6,wheels:6,type: "Land"},
]

export const upgrades = [
    {name: "Autonomous"},
    {name: "Hitch"},
    {name: "Winch"}
]

export const roverModules = [
    {modules_id: "crewCab", blockName: "Crew Cab", seats: 4, slotCost: 2},
    {modules_id: "truckBed", blockName: "Truck Bed", slotCost: 2, storage: 4},
    {modules_id: "mobileHab", blockName: "Mobile Hab", seats: 1, slotCost:4, storage: 3},
    {modules_id: "battery_s", blockName: "Small Battery", slotCost:1, energy: 5},
    {modules_id: "battery_m", blockName: "Medium Battery", slotCost:2, energy: 15},
    {modules_id: "battery_l", blockName: "Large Battery", slotCost:3, energy: 30},
]