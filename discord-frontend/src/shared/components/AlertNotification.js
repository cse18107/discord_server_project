import React from 'react';
import { Alert, Snackbar} from '@mui/material';
import { useSelector } from 'react-redux';
import { closeAlertMessage } from '../../store/slice/alertMessageSlice';
import { useDispatch } from 'react-redux';

const AlertNotification = (props) => {
  const dispatch = useDispatch();
  const {showAlertMessage,alertMessageContent} = useSelector((state)=> state.alert);
  const handleClose = () => {
    dispatch(closeAlertMessage());
  }
  console.log('showAlertMessage ',showAlertMessage)
  return (
    <Snackbar 
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showAlertMessage}
        onClose={()=>{handleClose()}}
    >
        <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification