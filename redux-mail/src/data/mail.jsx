let allMail = 
     [
      {
        "id": "1",
        "from": "john.doe@example.com",
        "to": "you@example.com",
        "subject": "Meeting at 3 PM",
        "snippet": "Please confirm the time for our meeting...",
        "body": "Hi, \n\nPlease confirm the time for our meeting at 3 PM. Let me know if that works for you.\n\nThanks,\nJohn",
        "timestamp": "2025-03-12T10:30:00Z",
        "is_read": false,
        "labels": ["Work", "Important"],
        "mail_status" : 2
      },
      {
        "id": "2",
        "from": "jane.smith@example.com",
        "to": "you@example.com",
        "subject": "Project Deadline Extended",
        "snippet": "The project deadline has been moved...",
        "body": "Hi Team, \n\nThe project deadline has been extended to next Friday. Please update your schedules accordingly.\n\nBest, \nJane",
        "timestamp": "2025-03-12T09:15:00Z",
        "is_read": true,
        "labels": ["Work", "Updates"],
        "mail_status" : 2
      },
      {
        "id": "3",
        "from": "team@example.com",
        "to": "you@example.com",
        "subject": "Weekly Status Report",
        "snippet": "Please find the latest status report...",
        "body": "Hi All, \n\nPlease find the latest status report attached. Let me know if you have any questions.\n\nThanks, \nTeam",
        "timestamp": "2025-03-11T14:30:00Z",
        "is_read": false,
        "labels": ["Team", "Updates"],
        "mail_status" : 2
      },
      {
        "id": "4",
        "from": "you@example.com",
        "to": "client@example.com",
        "subject": "Proposal Submission",
        "snippet": "Please find the attached proposal...",
        "body": "Hi,\n\nPlease find the attached proposal for your review.\n\nBest regards,\nYou",
        "timestamp": "2025-03-10T16:45:00Z",
        "is_read": true,
        "labels": ["Sent", "Work"],
        "mail_status" : 2
      },
      {
        "id": "5",
        "from": "you@example.com",
        "to": "manager@example.com",
        "subject": "Meeting Notes",
        "snippet": "Draft of the meeting notes...",
        "body": "Hi,\n\nHere's a draft of the meeting notes. Let me know if any changes are needed.\n\nThanks,\nYou",
        "timestamp": "2025-03-10T08:20:00Z",
        "is_read": false,
        "labels": ["Draft", "Work"],
        "mail_status" : 2
      }
     ]


     /*
     Mail Status Meaning

     1 --- inbox - read
     2 --- inbox - unread
     3 --- draft
     4 --- trash
     5 --- sent items

     */


     export default allMail;