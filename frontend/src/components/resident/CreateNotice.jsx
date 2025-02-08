import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorComponent from '../auth/Error';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function CreateNotice() {
const navigate= useNavigate();

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

    let token = localStorage.getItem('resiToken');

    if (!token) {
        console.error("No token found. User might not be logged in.");
        setError('no token'); setSeverity('warning');
        return;
    }

    // Ensure token is properly formatted
    token = token.replace(/"/g, ''); // Remove quotes if they exist
    console.log("Token being sent:", token); // Log token to check its size
    const author = user?._id || user?.name; 

    if (!author) {
        console.error("No author found. User might not be logged in properly.");
        setError('No author found'); 
        setSeverity('warning');
        return;
    }
    try {
        const response = await fetch('http://localhost:3001/api/resi/notices/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              note: note, author: author })
        });

        const data = await response.text(); // First, get raw text response

        // console.log("Raw response data:", data);

        if (!response.ok) {
            throw new Error(data || "Failed to create notice.");
        }

        console.log("Notice created successfully:", JSON.parse(data));
        setError('NOTICE POSTED !'); setSeverity('success'); 
        navigate('/resi/notices');
    } catch (error) {
        console.error("Error in handleSubmit:", error.message);
    }
};


  return (

    <React.Fragment>
      <div className="edit">
  <span className="editing">Add New Notice:</span>
  <button className="resibutton" variant="outlined" onClick={handleClickOpen}>
    Add
  </button>
</div>
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
        <ErrorComponent error={error} severity={severity} setError={setError} />
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
            onChange={(e) => setNote(e.target.value)}
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

