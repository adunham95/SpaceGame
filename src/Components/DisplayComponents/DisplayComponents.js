import React, { useState, useEffect } from 'react';
import "./_DisplayCompoents.scss"

const Chip = ({title, value="", className}) => {
    // console.log(title);
    if(value !== ""){
        return(
            <span className={`chip ${className}`}>
            <span className={`key`}>{title}:</span> <span className={`value`}>{value}</span>
        </span>
        )
    }
    else {
        return(
            <span className={`chip ${className}`}>
            <span className={`key`}>{title}:</span>
        </span>
        )
    }

};

const AspectRatio = (props) => {
    return(
        <div className={`ratioContainer ${props.className}`} data-ratio={props.ratio}>
            <div className={`ratioContainer-inner`}>
                {props.children}
            </div>
        </div>
    )

};

const BatteryLevel = ({charge}) =>{

    const [batteryColor, setBatteryColor] = useState("green");

    useEffect(()=>{
        console.log(charge);
        if(charge === 100){setBatteryColor("green")}
        else if(charge > 25){setBatteryColor("green")}
        else if(charge > 10){setBatteryColor("#e5e505")}
        else if(charge > 0){setBatteryColor("#e91717")}
    },[charge])

    return(
        <div className={`battery`} data-charge={charge} style={{"--batteryColor":batteryColor}}>
            <span className={`battery-level`} style={{width:`${charge}%`}}></span>
        </div>
    ) 
}

export {Chip, AspectRatio, BatteryLevel};