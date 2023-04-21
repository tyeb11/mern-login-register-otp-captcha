import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { BaseForm } from "../styles/Form.styles";
import { SubmitButton } from "../styles/Button.styles";

function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    if (!otp) {
      return;
    }
    const { data } = await axios.post("/api/auth/verify-otp", {
      otp,
      id: Cookies.get("id"),
    });
    console.log(data);
    if (data.msg) {
      navigate("/add-slot");
    }
  };
  return (
    <>
      <BaseForm>
        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="OTP"
            style={{
              border: "2px solid black",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              borderRadius: "0",
            }}
          />
          <Form.Text className="text-muted">
            OTP is send to given email id
          </Form.Text>
        </Form.Group>
        <SubmitButton variant="primary" onClick={() => handleSubmit()}>
          Submit
        </SubmitButton>
      </BaseForm>
    </>
  );
}

export default VerifyOtp;
