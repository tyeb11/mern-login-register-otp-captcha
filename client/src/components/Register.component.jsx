import { useState, useRef } from "react";
import { InputGroup, Form, Button, InputGroupAddon } from "react-bootstrap";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../styles/Button.styles";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BaseForm } from "../styles/Form.styles";

function Register() {
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    console.log("hello");
    console.log(name);
    if (!name && !email && !password) {
      return;
    }
    const token = captchaRef.current.getValue();
    const { data } = await axios.post("/api/auth/register", {
      name,
      email,
      password,
      token,
    });
    console.log(data);
    captchaRef.current.reset();
    if (data.msg) {
      navigate("/verify-otp");
    }
  };

  return (
    <>
      <BaseForm>
        <h1>Register</h1>
        <InputGroup style={{ display: "flex", gap: "5px" }}>
          <AiOutlineUser style={{ fontSize: "30px" }} />
          <Form.Control
            style={{
              border: "2px solid black",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              borderRadius: "0",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
        </InputGroup>
        <InputGroup style={{ display: "flex", gap: "5px" }}>
          <AiOutlineMail style={{ fontSize: "30px" }} />
          <Form.Control
            style={{
              border: "2px solid black",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              borderRadius: "0",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
        </InputGroup>
        <InputGroup style={{ display: "flex", gap: "5px" }}>
          <RiLockPasswordLine style={{ fontSize: "30px" }} />
          <Form.Control
            style={{
              border: "2px solid black",
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              borderRadius: "0",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </InputGroup>

        <ReCAPTCHA
          style={{ display: "inline-block" }}
          sitekey="6LfEcHwlAAAAAFZGSyww_21MYcUNcseclFYAvRAQ"
          ref={captchaRef}
        />
        <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
      </BaseForm>
      <p style={{ marginTop: "40px" }}>
        Already a member?{" "}
        <p style={{ color: "blue", display: "inline" }}>Log in</p>
      </p>
    </>
  );
}

export default Register;
