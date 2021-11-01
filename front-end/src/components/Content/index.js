import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllTasks from '../../pages/Screams/AllTasks'
import MyTasks from '../../pages/Screams/MyTasks'
import TeamTasks from '../../pages/Screams/TeamTasks'
import './style.css'

export default function Content() {
  return (

    <main id="content-container">
      <Switch>
        <Route exact path="/home/my-tasks" component={ MyTasks } />
        <Route exact path="/home/team-tasks" component={ TeamTasks } />
        <Route exact path="/home/all-tasks" component={ AllTasks } />
      </Switch>
    </main>
  )
}
