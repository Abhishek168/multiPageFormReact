import React from "react";
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

export const Submit = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Alert severity="success">Form Data saved successfully</Alert>
      <h3>Thank you for submitting, we will be in touch!</h3>
    </Container>
  );
};
