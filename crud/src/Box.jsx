import React, {memo} from 'react'

const Box = ({name, demo}) => {
    console.log("*********");
  return (
    <>
    <div>Box</div>
    <h3>{name}</h3>
    <button onClick={demo}>Login</button>
    </>
  )
}

export default memo(Box)