import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Menu() {
  return (
    <aside id="menu-container">
      <nav>
        <ul>
          <li><Link to="/home/my-tasks">My Tasks</Link></li>
          <li><Link to="/home/team-tasks">Team Tasks</Link></li>
          <li><Link to="/home/all-tasks">All Tasks</Link></li>
        </ul>
      </nav >
    </aside >
  )
}
