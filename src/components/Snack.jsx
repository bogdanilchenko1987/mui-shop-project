import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Product is add to basket!</Alert>
    </Snackbar>
  );
}

export default Snack;
