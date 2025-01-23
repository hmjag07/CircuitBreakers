import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Create from './CreateNotice'
import { AuthContext } from "../../context/AuthContext";
const NoticeCards = () => {
  // State to store notices data
  const [notices, setNotices] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch data using useEffect
    const fetchNotices = async (token) => {

        // if(!user){
        //   console.error('user is not logged in');return;
        // }

      try {
        const response = await fetch("http://localhost:3000/api/resi/notices",{
          method: 'GET', headers: {Authorization: `Bearer ${user.token}`},
        }); 
        const data = await response.json();
        console.log('Notices:', data);
        setNotices(data || []);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };


  useEffect(() => {
    if (user && user.token){
      fetchNotices(user.token);
    }
  },[user]);
  return (
    <div>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", p: 2 }}>
      {notices.map((notice) => (
        <Card key={notice._id} sx={{ width: "100%", maxWidth: 1200, mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              {notice.author || 'unknown author'} - {notice.date ? new Date(notice.date).toLocaleString() : "Unknown Date"} 
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {notice.note}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
    <Create/>
    </div>

  );
};

export default NoticeCards;
