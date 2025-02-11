import React, { useState, useEffect, useContext, useCallback } from "react";
import io from 'Socket.io-client';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Error from '../auth/Error'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../context/AuthContext";
import ErrorComponent from '../auth/Error';

const socket = io('http://localhost:3000'); 

const NoticeComponent = ({ userId }) => {
  useEffect(() => {
      socket.emit('joinRoom', userId);

      socket.on('newNotice', (data) => {
          alert(`New Notice: ${data.title} - ${data.message}`);
      });

      return () => socket.off('newNotice');
  }, [userId]);

  return <div>Waiting for Notices...</div>;
};


const NoticeCards = () => {
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('warning');
  const [notices, setNotices] = useState([]);
  const { user } = useContext(AuthContext); // Keep track of user if necessary, but using token directly from localStorage now.
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem('resiToken');
  
  const fetchNotices = useCallback(async () => {
    if (!token) {
        console.error("No token found. User might not be logged in.");
        setError('No token'); setSeverity('warning');
        return;
    }

    token = token.replace(/"/g, ''); // Remove quotes

    try {
        const response = await fetch("http://localhost:3001/api/resi/notices", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Notices Data:", data);

        if (Array.isArray(data)) {
            // Filter out expired notices
            const validNotices = data.filter(notice => 
                !notice.expiresAt || new Date(notice.expiresAt) > new Date()
            );
            setNotices(validNotices);
            setLoading(false);
        } else {
            console.error("Unexpected API response format:", data);
            setNotices([]);
        }
    } catch (error) {
        console.error("Error fetching notices:", error.message);
        setError("Error fetching notices"); setSeverity('error');
        setLoading(false);

    }
}, [token]);

  useEffect(() => {
    const interval = setInterval(fetchNotices, 2000); // Refresh every 2s
    return () => clearInterval(interval);
    // fetchNotices();
  },[]);

  return (
    <div >
      <Error error={error}
          severity={severity}
          setError={setError}/>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          p: 2,
        }}
      >
        {notices.length > 0 ? (
          notices.map((notice) => (
            <Card key={notice._id} sx={{ width: "70%", maxWidth: 1200, mb: 2 ,position: "relative"}}>
              <CardContent sx={{}}>
              <Box sx={{ position: "absolute", top: 8, right: 16, textAlign: "right" }}>

              <Typography variant="body2" sx={{ fontWeight:"bold", color: '#3A3960'}}>
                {notice.date ? notice.date : "Unknown Date"}
              </Typography>

              <Typography variant="body2" sx={{ color: '#3A3960' }}>
              {notice.time ? notice.time : "Unknown Time"}
              </Typography>
            </Box>

                <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: '#3A3960' }}>
                   {notice.title}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight:"bold", mb: 1, color: '#3A3960' }}>
                {notice.author.name || "Unknown Author"}
                </Typography>

                <Typography variant="body2" sx={{ mb: 1, color: '#3A3960' }}>
                  {notice.note}
                </Typography>
                
              </CardContent>
              <CardActions>
                {/* <Button size="small">Read More</Button> */}
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
           { loading ? ('Loading...') :("No notices available")}
          </Typography>
        )}
        <ErrorComponent error={error} severity={severity} setError={setError} />
      </Box>
    </div>
  );
};

export default NoticeCards;

