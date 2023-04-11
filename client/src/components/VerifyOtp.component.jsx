import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    if (!otp) {
      return;
    }
    const { data } = await axios.post("/api/auth/verify-otp", {
      otp,
      email: "tayyeb.amazon@gmail.com",
    });
    console.log(data);
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>OTP</Form.Label>
          <Form.Control
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="Enter OTP"
          />
          <Form.Text className="text-muted">
            OTP is send to given email id
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default VerifyOtp;
