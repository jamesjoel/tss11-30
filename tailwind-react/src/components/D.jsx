import React, {useContext} from 'react'
import DemoContext from '../DemoContext'

const D = () => {

    let data = useContext(DemoContext);

  return (
    <>
    <div>D</div>
    <h3>{data.name}</h3>
    </>
  )
}

export default D