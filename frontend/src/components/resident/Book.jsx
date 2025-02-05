

// import React, { useState } from 'react';
// import { 
//   TextField, 
//   Button, 
//   Card, 
//   CardContent, 
//   CardHeader, 
 
//   MenuItem, 
//   Select, 
//   FormControl, 
//   InputLabel 
// } from '@mui/material';

// const PROFESSIONAL_TYPES = [
//   'Plumber', 
//   'Electrician', 
//   'Carpenter', 
//   'HVAC Technician', 
//   'Painter', 
//   'Handyman'
// ];

// const Book = () => {
//     <div className='BOOKPROF'>        
// <h1>DEAR RESIDENT,</h1>
// <h2>HAVE A HUSTLE FREE LIFE! SOLVE YOUR EVERYDAY HOUSEHOLD PROBLEMS HERE...</h2>
// <h2>JUST FEW CLICKS AWAY, HERE AT ALL AT HOME</h2>


//     </div>
//   const [problem, setProblem] = useState('');
//   const [professionalType, setProfessionalType] = useState('');
//   const [location, setLocation] = useState('');
//   const [contactNumber, setContactNumber] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/report-problem', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           problem,
//           professionalType,
//           location,
//           contactNumber
//         })
//       });

//       if (response.ok) {
//         alert('Problem reported successfully!');
//         setProblem('');
//         setProfessionalType('');
//         setLocation('');
//         setContactNumber('');
//       } else {
//         alert('Failed to report problem');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred');
//     }
//   };

//   return (
//     <Card 
//       sx={{ 
//         maxWidth: 400, 
//         margin: 'auto', 
//         backgroundColor: '#3A3960', 
//         color: 'white',
//         borderRadius: 4,
//         padding: 4,
//         marginTop: 2,
//         marginBottom:2
//       }}
//     >
//       <CardHeader 
//         title="BOOK A PROFFESIONAL" 
//         titleTypographyProps={{
//           color: '#6fd649',
//           textAlign: 'center',
//           fontWeight: 'bold'
//         }} 
//       />
//       <CardContent>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Problem Description"
//             variant="outlined"
//             value={problem}
//             onChange={(e) => setProblem(e.target.value)}
//             required
//             margin="normal"
//             InputProps={{
//               style: { 
//                 color: 'white',
//                 borderColor: 'white'
//               }
//             }}
//             InputLabelProps={{
//               style: { color: 'white' }
//             }}
//           />

//           <FormControl fullWidth margin="normal">
//             <InputLabel 
//               id="professional-type-label" 
//               style={{ color: 'white' }}
//             >
//               Professional Type
//             </InputLabel>
//             <Select
//               labelId="professional-type-label"
//               value={professionalType}
//               label="Professional Type"
//               onChange={(e) => setProfessionalType(e.target.value)}
//               required
//               sx={{
//                 color: 'white',
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   borderColor: 'white',
//                 },
//                 '&:hover .MuiOutlinedInput-notchedOutline': {
//                   borderColor: 'white',
//                 },
//               }}
//             >
//               {PROFESSIONAL_TYPES.map((type) => (
//                 <MenuItem key={type} value={type}>
//                   {type}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <TextField
//             fullWidth
//             label="Location"
//             variant="outlined"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//             margin="normal"
//             InputProps={{
//               style: { 
//                 color: 'white',
//                 borderColor: 'white'
//               }
//             }}
//             InputLabelProps={{
//               style: { color: 'white' }
//             }}
//           />

//           <TextField
//             fullWidth
//             label="Contact Number"
//             variant="outlined"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             required
//             margin="normal"
//             type="tel"
//             InputProps={{
//               style: { 
//                 color: 'white',
//                 borderColor: 'white'
//               }
//             }}
//             InputLabelProps={{
//               style: { color: 'white' }
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               mt: 2,
//               backgroundColor: '#6fd649',
//               color: '#3A3960',
//               '&:hover': {
//                 backgroundColor: '#6fd649',
//                 opacity: 0.8,
//                 fontWeight:'bold'
//               }
//             }}
//           >
//             SEND TO PROFFESIONAL
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default Book