import React, { useState } from 'react';
import ProfCards from './ProfCards';
import { 
  Box, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  TextField, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel,
  Button,
  Snackbar,
  Alert,
  MenuItem
} from '@mui/material';

const Form = () => {
  
  const [knowsProblem, setKnowsProblem] = useState('no');
  const [problemDescription, setProblemDescription] = useState('');
  const [expectedCharges, setExpectedCharges] = useState('');
  const [expectedHour, setExpectedHour] = useState('');
  const [expectedMinute, setExpectedMinute] = useState('');
  const [expectedPeriod, setExpectedPeriod] = useState('AM');
  const [selectedDate, setSelectedDate] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const hours = Array.from({length: 12}, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({length: 60}, (_, i) => i.toString().padStart(2, '0'));

  const validateForm = () => {
    const newErrors = {};

    if (knowsProblem === 'yes' && !problemDescription.trim()) {
      newErrors.problemDescription = 'Problem description is required';
    }

    if (!expectedCharges.trim()) {
      newErrors.expectedCharges = 'Expected charges are required';
    }

    if (!expectedHour || !expectedMinute) {
      newErrors.expectedTime = 'Time is required';
    }

    if (!selectedDate) {
      newErrors.selectedDate = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const formattedTime = `${expectedHour}:${expectedMinute} ${expectedPeriod}`;
      console.log('Submitted Time:', formattedTime);
      setOpenAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
   <><ProfCards/>
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      p: 4, 
      backgroundColor: '#E6F3E6' 
    }}>
      <Card sx={{ 
        width: '100%', 
        maxWidth: '800px', 
        border: '2px solid', 
        borderColor: '#A0D8AF', 
        backgroundColor: 'white'
      }}>
        <CardHeader 
          title={
            <Typography variant="h5" component="h1" justifyContent='center' textAlign='center' fontFamily='sans-serif' fontWeight='bolder'>
             REQUEST FORM
            </Typography>
          } 
        />
        <CardContent>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <FormControl>
              <FormLabel>Do you know the problem?</FormLabel>
              <RadioGroup 
                row
                value={knowsProblem}
                onChange={(e) => setKnowsProblem(e.target.value)}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            {knowsProblem === 'yes' && (
              <TextField
                label="Describe the Problem"
                multiline
                rows={4}
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="Enter problem details"
                variant="outlined"
                error={!!errors.problemDescription}
                helperText={errors.problemDescription}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#B0E0E6',
                    },
                    '&:hover fieldset': {
                      borderColor: '#87CEEB',
                    },
                  }
                }}
              />
            )}

            <TextField
              label="Expected Charges"
              value={expectedCharges}
              onChange={(e) => setExpectedCharges(e.target.value)}
              placeholder="Estimated cost"
              variant="outlined"
              error={!!errors.expectedCharges}
              helperText={errors.expectedCharges}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#B0E0E6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#87CEEB',
                  },
                }
              }}
            />

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                select
                label="Hour"
                value={expectedHour}
                onChange={(e) => setExpectedHour(e.target.value)}
                variant="outlined"
                sx={{ flex: 1 }}
                error={!!errors.expectedTime}
              >
                {hours.map((hour) => (
                  <MenuItem key={hour} value={hour}>
                    {hour}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Minute"
                value={expectedMinute}
                onChange={(e) => setExpectedMinute(e.target.value)}
                variant="outlined"
                sx={{ flex: 1 }}
                error={!!errors.expectedTime}
              >
                {minutes.map((minute) => (
                  <MenuItem key={minute} value={minute}>
                    {minute}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Period"
                value={expectedPeriod}
                onChange={(e) => setExpectedPeriod(e.target.value)}
                variant="outlined"
                sx={{ flex: 1 }}
              >
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="PM">PM</MenuItem>
              </TextField>
            </Box>
            {errors.expectedTime && (
              <Typography color="error" variant="caption">
                {errors.expectedTime}
              </Typography>
            )}

            <TextField
              label="Day and Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              error={!!errors.selectedDate}
              helperText={errors.selectedDate}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#B0E0E6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#87CEEB',
                  },
                }
              }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              sx={{ 
                mt: 2,
                backgroundColor: '#A0D8AF',
                '&:hover': {
                  backgroundColor: '#8FBC8F'
                }
              }}
            >
              Send Request
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Snackbar 
        open={openAlert} 
        autoHideDuration={6000} 
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Your request has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
    </> 
  );
};


export default Form;