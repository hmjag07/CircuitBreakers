import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProfCards = () => {
  const [professionals, setProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch("http://localhost:3001/data/professionals");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging
        setProfessionals(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfessionals();
  }, []);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (professionals.length === 0) {
    return <Typography>No professionals found.</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", p: 2 }}>
      {professionals.map((professional) => (
        <Card key={professional._id} sx={{ minWidth: 275, maxWidth: 300, backgroundColor: '#BED754'}}>
          <CardContent>
            {/* <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
              Professional Details
            </Typography> */}
            <Typography sx={{color: '#3A3960'}}variant="h5" component="div">
              {professional.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Specialization: {professional.profession}
            </Typography>
            <Typography sx={{color: '#3A3960'}}variant="body2">
              Contact: {professional.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{color: '#3A3960', "&:hover":{
              backgroundColor:'#E8ECD7'
            }}}size="small">Select</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProfCards;


