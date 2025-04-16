import React from 'react'
import {useParams} from 'react-router-dom'
import useSingleMail from '../hooks/useSingleMail';

const ViewMail = () => {
    let param = useParams();
    let id = param.id;

    let mail = useSingleMail(id);
  return (
    <div className="col-md-8 viewmail">
        <h3>{mail.subject}</h3>
        <small>{mail.timestamp}</small>
        <p className='fw-bold'>&#10094;{mail.from}&#10095;</p>
        <p>{mail.body}</p>
    </div>
  )
}

export default ViewMail