import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Error from '../auth/Error';
import { AuthContext } from "../../context/AuthContext";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('warning');

const { user }= useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!note) {
      setError('Please fill in the field');
      setSeverity('warning');
      return;
    }
    if(!user){
        setError(' You must ne logged in !')
        setSeverity('warning');
    }

    try {
      const response = await fetch("http://localhost:3000/api/resi/notices/create", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({ note,
            author: user.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(`Notice was not created: ${data.error}`);
        setSeverity('error');
        return;
      }

    //   localStorage.setItem('authToken', data.token);
      setError('Notice created successfully!');
      setSeverity('success');
      setNote('');
      handleClose();
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSeverity('error');
    }
  };

  return (
    <React.Fragment>
      <button className="custom-button" variant="outlined" onClick={handleClickOpen}>
        Add
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
        sx={{
          "& .MuiDialog-paper": {
            width: "600px",
            maxWidth: "90%",
            padding: "20px",
          },
        }}
      >
        <Error error={error} severity={severity} setError={setError} />
        <DialogTitle>New Notice</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="notice"
            label="Write the notice here"
            type="text"
            fullWidth
            variant="standard"
            value={note}
            onChange={(e) => setNote(e.target.value)}  // Update note state
          />
        </DialogContent>
        <DialogActions>
          <button className="custom-button" onClick={handleClose}>Cancel</button>
          <button className="custom-button" type="submit">Post</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


