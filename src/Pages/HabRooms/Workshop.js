import React from 'react';
import {Link, useParams} from "react-router-dom";
import {NewRoverModule} from "../Rover"

function Workshop() {
  return (
    <div className="page workshop">
        <h1>Workshop</h1>
        <NewRoverModule/>
    </div>
  );
}


export default Workshop;
