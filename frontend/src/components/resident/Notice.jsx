import React, { useState, useEffect, useContext, useCallback } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../context/AuthContext";
import ErrorComponent from '../auth/Error';

const NoticeCards = () => {
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('warning');
  const [notices, setNotices] = useState([]);
  const { user } = useContext(AuthContext); // Keep track of user if necessary, but using token directly from localStorage now.

  let token = localStorage.getItem('resiToken');
  
  const fetchNotices = useCallback(async () => {
    if (!token) {
      console.error("No token found. User might not be logged in.");
      setError('no token');
      setSeverity('warning');
      return;
    }

    token = token.replace(/"/g, ''); // Remove quotes if they exist
    console.log("Token being sent:", token);

    try {
      const response = await fetch("http://localhost:3001/api/resi/notices", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Notices Data:", data);

      if (Array.isArray(data)) {
        setNotices(data);
      } else {
        console.error("Unexpected API response format:", data);
        setNotices([]);
      }
    } catch (error) {
      console.error("Error fetching notices:", error.message);
      setError("Error fetching notices");
      setSeverity('error');
    }
  }, [token]);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  return (
    <div>
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
            <Card key={notice._id} sx={{ width: "100%", maxWidth: 1200, mb: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                  {notice.author.name || "Unknown Author"} -{" "}
                  {notice.date ? notice.date : "Unknown Date"} - {notice.time}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {notice.note}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
            No notices available.
          </Typography>
        )}
        <ErrorComponent error={error} severity={severity} setError={setError} />
      </Box>
    </div>
  );
};

export default NoticeCards;

