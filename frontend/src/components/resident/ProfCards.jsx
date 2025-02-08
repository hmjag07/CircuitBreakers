
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material';

const ProfCards = () => {
  const [professionals, setProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Specialization, setSpecialization] = useState(""); 

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch("http://localhost:3001/data/professionals");
        const data = await response.json();
        console.log("Fetched Data:", data);
        setProfessionals(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfessionals();
  }, []);

  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };

  const filteredProfessionals = Specialization
    ? professionals.filter((professional) => professional.profession === Specialization)
    : professionals;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      <Container maxWidth="lg">
        <FormControl 
          variant="standard" 
          sx={{ 
            m: 1, 
            minWidth: 120, 
            alignContent: "centre",
            "& .MuiInputLabel-root": { color: "black" },
            "& .MuiInputLabel-root.Mui-focused": { color: "blue" },
            "& .MuiSelect-root": { color: "green" },
            "& .MuiSelect-root:hover": { backgroundColor: "yellow" },
            "& .MuiSelect-icon": { color: "green" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
            "& .MuiSelect-placeholder": { color: "green" },
          }}
        >
          <InputLabel id="demo-simple-select-standard-label">Specialization</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Specialization}
            onChange={handleSpecializationChange}
            label="Specialization"
            displayEmpty
            sx={{ 
              "& .MuiSelect-select": { color: "#85A947" },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Plumber"}>Plumber</MenuItem>
            <MenuItem value={"Electrician"}>Electrician</MenuItem>
            <MenuItem value={"Carpenter"}>Carpenter</MenuItem>
            {/* <MenuItem value={"RO Engineer"}>Ro Engineer</MenuItem> */}
            <MenuItem value={"Painter"}>Painter</MenuItem>
            <MenuItem value={"AC repair and servicing"}>AC repair and servicing</MenuItem>
            <MenuItem value={"Furniture Assembly"}>Furniture Assembly</MenuItem>
            <MenuItem value={"Pest control services"}>Pest control services</MenuItem>
            <MenuItem value={"Inverter repair and servicing"}>Inverter repair and servicing</MenuItem>
            <MenuItem value={"Deep house cleaner"}>Deep house cleaner</MenuItem>
            <MenuItem value={"Native water purifier repair and services"}>Native water purifier repair and services</MenuItem>
          </Select>
        </FormControl>

        
        <Box sx={{ 
          display: "flex", 
          flexDirection: "row", 
          overflowX: "auto", 
          gap: 2, 
          justifyContent: "flex-start", 
          padding: 2,
          width: '100%'
        }}>
          {filteredProfessionals.length > 0 ? (
            filteredProfessionals.map((professional) => (
              <Card 
                key={professional._id} 
                sx={{ 
                  minWidth: 275, 
                  maxWidth: 300, 
                  backgroundColor: '#ffe8f3', 
                  flexShrink: 0 
                }}
              >
                <CardContent>
                  <Typography sx={{ color: '#3A3960' }} variant="h5" component="div">
                    {professional.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Specialization: {professional.profession}
                  </Typography>
                  <Typography sx={{ color: '#3A3960' }} variant="body2">
                    Contact: {professional.phone}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                  <Button sx={{ color: '#3A3960', "&:hover": { backgroundColor: '#E8ECD7' } }} size="small">
                    Select
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography>No professionals found.</Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ProfCards;
