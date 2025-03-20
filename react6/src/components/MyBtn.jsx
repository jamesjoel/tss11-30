import React from 'react'

const MyBtn = ({onClick, className, children, data}) => {
    data("rohit");
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default MyBtn