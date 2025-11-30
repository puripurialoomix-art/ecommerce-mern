import { Box, TextField, Button, Typography, Stepper, Step, StepLabel, styled } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Container = styled(Box)`
  width: 70%;
  margin: auto;
  margin-top: 30px;
`;

const Section = styled(Box)`
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
`;

const PayButton = styled(Button)`
  width: 100%;
  background: #fb641b;
  color: #fff;
  height: 50px;
  font-size: 18px;
  margin-top: 20px;
  &:hover {
    background: #e45a12;
  }
`;

const Checkout = () => {

  const { cartItems } = useSelector(state => state.cart);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price.cost, 0);

  const steps = ["Delivery Address", "Order Summary", "Payment"];
  const [activeStep, setActiveStep] = useState(0);

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    house: '',
    area: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const goNext = () => {
    if (activeStep === 0) {
      if (!address.name || !address.phone || !address.pincode || !address.house || !address.area || !address.city || !address.state) {
        alert("Please fill all address details 🙏");
        return;
      }
    }
    setActiveStep(prev => prev + 1);
  };

  const handlePayment = () => {
    const upiID = "rahulchyy1999-3@okaxis"; // ✅ your UPI ID
    const upiLink = `upi://pay?pa=${upiID}&pn=Store&am=${totalAmount}&cu=INR`;
    window.location.href = upiLink;
  };

  return (
    <Container>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      {/* STEP 1 - ADDRESS */}
      {activeStep === 0 && (
        <Section>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Enter Delivery Address</Typography>

          <TextField fullWidth label="Full Name" name="name" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Mobile Number" name="phone" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Pincode" name="pincode" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="House No., Building" name="house" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="Area, Colony, Road" name="area" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="City" name="city" onChange={handleChange} sx={{ mb: 2 }} />
          <TextField fullWidth label="State" name="state" onChange={handleChange} sx={{ mb: 2 }} />

          <PayButton onClick={goNext}>Save & Continue</PayButton>
        </Section>
      )}

      {/* STEP 2 - ORDER SUMMARY */}
      {activeStep === 1 && (
        <Section>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Order Summary</Typography>
          
          {cartItems.map(item => (
            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>{item.title.shortTitle}</Typography>
              <Typography>₹{item.price.cost}</Typography>
            </Box>
          ))}

          <hr style={{ margin: '20px 0' }} />

          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Total: ₹{totalAmount}</Typography>

          <PayButton onClick={goNext}>Continue to Payment</PayButton>
        </Section>
      )}

      {/* STEP 3 - PAYMENT */}
      {activeStep === 2 && (
        <Section>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Select Payment Method</Typography>

          <Typography sx={{ fontSize: 16, mb: 2 }}>
            UPI Payment (Google Pay / PhonePe / Paytm)
          </Typography>

          <Typography sx={{ fontSize: 14, color: 'gray', mb: 3 }}>
            You will be redirected to your UPI app to complete the transaction securely.
          </Typography>

          <PayButton onClick={handlePayment}>Pay Now ₹{totalAmount}</PayButton>
        </Section>
      )}

    </Container>
  );
};

export default Checkout;

