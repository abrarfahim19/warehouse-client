import { AddCircle } from '@mui/icons-material';
import { Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:5,
    boxShadow: 24,
    p: 4,
  };

const CustomModal = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = user.email;
    const name = data.get('name');
    const author = data.get('author');
    const price = data.get('price');
    const stock = data.get('stock');
    const image = data.get('image');
    const supplier = data.get('supplier');
    const sold = "0";
    const result = {name,author,price,stock,supplier,image,sold,email};
    const url = `https://warehousemanagement123.herokuapp.com/inventory`;
    
    fetch (url,{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body : JSON.stringify(result)
    })
    .then(res => res.json())
    .then(d => {console.log(d)})

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success" endIcon={<AddCircle />}>Add Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add A Product
          </Typography>
          <TextField margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Product Name"
                            name="name"
                            autoFocus
                            />
          <TextField margin="normal"
                            required
                            fullWidth
                            id="author"
                            label="Author"
                            name="author"
                            autoFocus
                            />
          <TextField margin="normal"
                            required
                            fullWidth
                            id="supplier"
                            label="Supplier"
                            name="supplier"
                            autoFocus
                            />
          <TextField margin="normal"
                            fullWidth
                            type='number'
                            id="price"
                            label="Price"
                            name="price"
                            autoFocus
                            />
          <TextField margin="normal"
                            fullWidth
                            type='number'
                            id="stock"
                            label="Stock"
                            name="stock"
                            autoFocus
                            />
          <TextField margin="normal"
                            required
                            fullWidth
                            id="image"
                            label="Image Link"
                            name="image"
                            autoFocus
                            />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You can add the number of items from the management Page. Just Add the product first.
          </Typography>
          <Button type="submit" fullWidth variant="contained" color="success" endIcon={<AddCircle />}>Add Item</Button>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomModal;