import React from 'react'

const SentItems = () => {
  return (
    <div class="col-md-8 inbox-list">
      
      <div class="email-item unread">
        <div class="d-flex justify-content-between">
          <strong>John Doe</strong>
          <span class="email-time">10:30 AM</span>
        </div>
        <div>Meeting at 3 PM</div>
        <small class="text-muted">Please confirm the time for our meeting...</small>
      </div>
      <div class="email-item">
        <div class="d-flex justify-content-between">
          <strong>Jane Smith</strong>
          <span class="email-time">9:15 AM</span>
        </div>
        <div>Project Deadline Extended</div>
        <small class="text-muted">The project deadline has been moved...</small>
      </div>
      <div class="email-item">
        <div class="d-flex justify-content-between">
          <strong>Team Updates</strong>
          <span class="email-time">Yesterday</span>
        </div>
        <div>Weekly Status Report</div>
        <small class="text-muted">Please find the latest status report...</small>
      </div>
    </div>
  )
}

export default SentItems