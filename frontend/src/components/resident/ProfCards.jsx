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
  const [Specialization, setSpecialization] = useState(""); // Store  specialization

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

  // Function to handle dropdown change
  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };

  // Filter professionals based on  specialization
  const filteredProfessionals = Specialization
    ? professionals.filter((professional) => professional.profession === Specialization)
    : professionals;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
  <div>
    <div>
      <Container  maxWidth="sm">
      <FormControl 
  variant="standard" 
  sx={{ 
    m: 1, 
    minWidth: 120, alignContent: "centre",
    "& .MuiInputLabel-root": { color: "black" }, // Label color
    "& .MuiInputLabel-root.Mui-focused": { color: "blue" }, // Label color when focused
    "& .MuiSelect-root": { color: "green" }, // Selected text color
    "& .MuiSelect-root:hover": { backgroundColor: "yellow" }, // Hover background
    "& .MuiSelect-icon": { color: "green" }, // Dropdown arrow color
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" }, // Outline border color
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "black" }, // Border color on hover
    "& .MuiSelect-placeholder": { color: "green" }, // Change the placeholder color
  }}
>
  <InputLabel id="demo-simple-select-standard-label">Specialization</InputLabel>
  <Select
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
    value={Specialization}
    onChange={handleSpecializationChange}
    label="Specialization"
    displayEmpty // This makes sure the placeholder appears
    sx={{ 
      "& .MuiSelect-select": { color: "#85A947" }, // Placeholder text color
      "&:hover": { backgroundColor: "" }, // Hover effect
    }}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={"Plumber"}>Plumber</MenuItem>
    <MenuItem value={"Electrician"}>Electrician</MenuItem>
    <MenuItem value={"Carpenter"}>Carpenter</MenuItem>
  </Select>
</FormControl>

      {/* Display filtered professionals */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map((professional) => (
            <Card key={professional._id} sx={{ minWidth: 275, maxWidth: 300, backgroundColor: '#BED754' }}>
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
      
      </div>
  );
};

export default ProfCards;


