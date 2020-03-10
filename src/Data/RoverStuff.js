export const roverTypes = [
    {id: "atv", name: "ATV", lifeSupport: false, seats: 1, slots: 0, type: "Land"},
    {id: "mini", name: "Mini", lifeSupport: false, seats: 0, slots: 0, type: "Land"},
    {id: "exSmall", name: "Extra Small", lifeSupport: true, seats: 1, slots: 1, type: "Land"},
    {id: "small",name: "Small", lifeSupport: true, seats: 1, slots: 2, type: "Land"},
    {id: "medium",name: "Medium", lifeSupport: true, seats: 2, slots: 4, type: "Land"},
    {id: "large",name: "Large", lifeSupport: true, seats: 2, slots: 6, type: "Land"},
    {id: "exLarge",name: "Extra Large", lifeSupport: true, seats: 2, slots: 8, type: "Land"},
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