import React from 'react';
import { Alert, Snackbar} from '@mui/material';


const AlertNotification = (props) => {
  return (
    <Snackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open
        onClose={()=> {}}
        // autoHideDuration={6000}
    >
        <Alert severity='info'>Alert message</Alert>
    </Snackbar>
  )
}

export default AlertNotification