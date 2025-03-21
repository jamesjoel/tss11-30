import React from 'react'
import Mail from '../components/Mail'
import { useSelector } from 'react-redux'

const Inbox = () => {

  let allMail = useSelector(state=>state.MailReducer);

  return (
    <div class="col-md-10 inbox-list">
      
        {
          allMail.map(item=> item.mail_status==1 || item.mail_status ==2 ? <Mail key={item.id} data={item}  /> : '')
        }
        
      
      
    </div>
  )
}

export default Inbox