import React, { useEffect } from 'react';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <h1>Space Game</h1>
    </div>
  )
}

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Captains Log</Link>
                </li>
                <li>
                    <Link to="/missionControl">Mission Control</Link>
                </li>
            </ul>
      </nav>
    )
  }

export {Header, Nav};