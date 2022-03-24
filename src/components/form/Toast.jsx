import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({close, setClose}) {

  function handleClose (event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setClose(false);
  };

  const action = (
    <React.Fragment>
      <Button 
       color="primary" 
       size="small" 
       onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={close}
        autoHideDuration={2000}
        onClose={handleClose}
        message="SUBMITTED"
        action={action}
    
      />
    </div>
  );
}