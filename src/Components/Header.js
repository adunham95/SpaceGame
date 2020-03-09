import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function Header() {
    const [sol, setSol] = useState(0);

  return (
    <div className="header">
        <h1>Space Game</h1>
        <div>
            Sol {sol}
        </div>
    </div>
  )
}

function Nav() {
    return (
        <nav className="nav flex">
            <ul>
                <li>
                    <Link to="/">Captains Log</Link>
                </li>
                <li>
                    <Link to="/missionControl">Mission Control</Link>
                </li>
                <li>
                    <Link to="/hab">Hab</Link>
                </li>
            </ul>
      </nav>
    )
  }

export {Header, Nav};