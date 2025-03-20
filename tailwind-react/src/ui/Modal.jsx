import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalBox = ({showModal, setShowModal, tableRow, confDelete}) => {
    
 
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Message
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure want to delete <b>{tableRow.name}</b>
          </Typography>
          <div className='my-3'>
          <Button onClick={()=>setShowModal(false)} variant="contained" sx={{ ml: 0 }} color="success">Close</Button>
          <Button onClick={()=>{confDelete(tableRow); setShowModal(false)}}  variant="contained" sx={{ ml: 2 }} color="error">Delete</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalBox