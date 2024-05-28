import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' style={{marginTop: 20,float:'right'}}>Add User</Button>
      <Todos handleOpen={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1100,height: 500 }}>
          <h2 id="parent-modal-title">Welcome </h2>
         
          <AddTodo />
          <Button onClick={handleClose} variant='contained' style={{marginTop: 20,float:'right'}}> Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
