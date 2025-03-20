import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  let allMail = useSelector(state=>state.MailReducer);
  let counter=0;
  allMail.forEach(item=>{
    if(item.mail_status==2){
      counter++;
    }
  })

  return (
    <div class="col-md-2 sidebar">
      <button class="btn btn-danger mb-3">+ Compose</button>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inbox ({counter})</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Drafts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trash</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar