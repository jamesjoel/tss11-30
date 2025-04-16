import React, { useState } from 'react'
import InputValue from './InputValue'
import ListValue from './ListValue'

const App7 = () => {
    let [users, setUsers] = useState([]);
  return (
    <div className="container my-5">
        <InputValue setUsers={setUsers} />
        <hr />
        <ListValue  users={users} />
    </div>
  )
}

export default App7