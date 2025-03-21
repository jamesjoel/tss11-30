import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changReadStatus } from '../redux/MailSlice';

const Mail = ({data}) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let readMail = (id)=>{
    // console.log("****", id)
    dispatch(changReadStatus(id));
    navigate(`/inbox/${id}`)
  }

  return (
    <div onClick={()=>readMail(data.id)} class="email-item">
    <div className={'my-3 border-bottom py-2' + (data.mail_status == 2 ? ' unread' : '')}>
          <div class="d-flex justify-content-between">
            <strong>{data.from}</strong>
            <span class="email-time">{data.timestamp}</span>
          </div>
          <div>{data.subject}</div>
          <small class="text-muted">{data.snippet}</small>
        </div>
    </div>
  )
}

export default Mail