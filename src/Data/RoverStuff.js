export const roverTypes = [
    {type_id: "atv", type_name: "ATV", lifeSupport: false, seats: 1, slots: 0, type: "Land"},
    {type_id: "mini", type_name: "Mini", lifeSupport: false, seats: 0, slots: 0, type: "Land"},
    {type_id: "exSmall", type_name: "Extra Small", lifeSupport: true, seats: 1, slots: 1, type: "Land"},
    {type_id: "small",type_name: "Small", lifeSupport: true, seats: 1, slots: 2, type: "Land"},
    {type_id: "medium",type_name: "Medium", lifeSupport: true, seats: 2, slots: 4, type: "Land"},
    {type_id: "large",type_name: "Large", lifeSupport: true, seats: 2, slots: 6, type: "Land"},
    {type_id: "exLarge",type_name: "Extra Large", lifeSupport: true, seats: 2, slots: 8, type: "Land"},
]

export const upgrades = [
    {name: "Autonomous"},
    {name: "Hitch"}
]

export const roverSlots = [
    {slot_id: "crewCab", blockName: "Crew Cab", seats: 4, slotCost: 2, storage: 0},
    {slot_id: "truckBed", blockName: "Truck Bed", seats: 0, slotCost: 2, storage: 4},
    {slot_id: "mobileHab", blockName: "Mobile Hab", seats: 1, slotCost:4, storage: 3},
]