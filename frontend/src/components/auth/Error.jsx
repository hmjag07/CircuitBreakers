import React from 'react'
import Alert from '@mui/material/Alert';

const Error = ({setError, severity, error}) => {
    
  return (
    <div data-theme="mytheme">
          {error && 
          (<Alert   
          sx={ 
            {'.MuiAlert-icon': { color: '#3A3960'}}
             }
          className= {`alert-${severity}`}
          severity={severity}
          onClose={() => setError('')}>

          {error}
          </Alert>)}

          </div>
  );
};

export default Error;