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
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('warning');
  const [expiryDays, setExpiryDays]= useState('');
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
        setError('No token'); setSeverity('warning');
        return;
    }

    token = token.replace(/"/g, '');
    const author = user?._id || user?.name;
    if (!author) {
        console.error("No author found. User might not be logged in properly.");
        setError('No author found'); setSeverity('warning');
        return;
    }

    // expiry hours to an absolute timestamp
    const expiryDaysInt = parseInt(expiryDays, 10);
    if (!expiryDaysInt || expiryDaysInt < 1) {
        alert("Please enter a valid number of days for expiry.");
        return;
    }

    // Calculate the expiry date
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiryDaysInt);

    console.log("Sending Data:", { note, author, title, expiresAt }); //

    try {
        const response = await fetch('http://localhost:3001/api/resi/notices/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              note: note,
              author: author,
              title: title,
              expiresAt
          })
        });

        const data = await response.text();
        if (!response.ok) {
            throw new Error(data || "Failed to create notice.");
        }

        console.log("Notice created successfully:", JSON.parse(data));
        setError('NOTICE POSTED!'); setSeverity('success');
        setTitle(''); setNote(''); setExpiryDays("");
        handleClose();
        navigate('/resi/home');
    } catch (error) {
        console.error("Error in handleSubmit:", error.message);
    }
};


  return (
    <React.Fragment>
      <div className="relative flex flex-col items-center">
  
      <button 
      className="custom-button !w-32 fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
      variant="outlined" 
      onClick={handleClickOpen}
      >
  Add a Notice
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
    {/* Title Input */}
    <TextField
      required
      margin="dense"
      id="title"
      name="title"
      label="Title"
      type="text"
      fullWidth
      variant="standard"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <TextField
      required
      margin="dense"
      id="expiryDays"
      name="expiryDays"
      label="Expiry (days)"
      type="number"
      fullWidth
      variant="standard"
      value={expiryDays}
      onChange={(e) =>setExpiryDays(e.target.value)}
      InputProps={{ inputProps: { min: 1 } }}
      className="mt-2 p-2 border rounded-lg w-full"
      />

    {/* Notice Text Area */}
    <TextField
      required
      margin="dense"
      id="notice"
      name="notice"
      label="Write the notice here"
      type="text"
      fullWidth
      variant="standard"
      multiline
      minRows={3} // Allows expanding vertically
      maxRows={10}
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



