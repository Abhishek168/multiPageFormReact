import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Payment = ({ formData, setForm, navigation }) => {
  const { cardType, cardNumber, expirationDate, verificationCode } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Payment</h3>
      <TextField
        label="Card Type"
        name="cardType"
        value={cardType}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <TextField
        label="Card Number"
        type="number"
        name="cardNumber"
        value={cardNumber}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Expiration Date"
        name="expirationDate"
        value={expirationDate}
        type="date"
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="verificationCode"
        name="verificationCode"
        type="number"
        value={verificationCode}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
