import React, { useEffect, useState } from 'react'
import fakeDB from '../../../data/fakeDB'
import user from '../../../data/userData'

export default function MyTasks() {
  const [userData, setUserData] = useState(user);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filter = fakeDB.filter((data) => data.author.name === user[0].author.name)
    setFilteredData(filter)
  }, [])


  return (
    <div>
      <h2>My Tasks
        <ul>
          { filteredData.map((data) => {
            return <li>{ `${data.task} ` }</li>
          }) }
        </ul>
      </h2>
    </div>
  )
}
