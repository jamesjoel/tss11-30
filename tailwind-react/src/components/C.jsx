import React, {useContext} from 'react'
import D from './D'
import DemoContext from '../DemoContext'

const C = () => {

    let user = useContext(DemoContext);

  return (
    <>
    <div>C ---- {user.city}</div>
    <D />
    </>
  )
}

export default C