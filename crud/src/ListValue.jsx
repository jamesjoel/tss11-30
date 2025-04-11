import React from 'react'

const ListValue = ({users}) => {
  return (
    <>
    <h2>User List</h2>
    {
        users.map(item=><h3>{item}</h3>)
    }
    </>
  )
}

export default ListValue