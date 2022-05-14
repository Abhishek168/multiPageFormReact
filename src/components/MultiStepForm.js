import React from "react";
import { useForm, useStep } from "react-hooks-helper";

// importing different steps
import { Customer } from "./stepForm/Customer";
import { Payment } from "./stepForm/Payment";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  cardType: "",
  cardNumber: "",
  expirationDate: "",
  verificationCode: ""
};

const steps = [
  { id: "customer" },
  { id: "payment" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "customer":
      return <Customer {...props} />;
    case "payment":
      return <Payment {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
