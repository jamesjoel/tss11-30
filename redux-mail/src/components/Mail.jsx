import React from 'react'

const Mail = ({data}) => {
  return (
    <div className={'my-3 border-bottom py-2' + (data.mail_status == 2 ? ' unread' : '')}>
          <div class="d-flex justify-content-between">
            <strong>{data.from}</strong>
            <span class="email-time">{data.timestamp}</span>
          </div>
          <div>{data.subject}</div>
          <small class="text-muted">{data.snippet}</small>
        </div>
  )
}

export default Mail