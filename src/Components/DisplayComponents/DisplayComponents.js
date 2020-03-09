import React from 'react';
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

export {Chip, AspectRatio};