import { Form, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseForm } from "../styles/Form.styles";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { SubmitButton } from "../styles/Button.styles";

function RegisterAdmin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    console.log("hello");
    console.log(name);
    if (!name && !email && !password) {
      return;
    }

    const { data } = await axios.post("/api/admin/register", {
      name,
      email,
      password,
    });
    console.log(data);
    if (data.msg) {
      navigate("/admin/users");
    }
  };

  return (
    <>
      <BaseForm>
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
        <InputGroup>
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

        <InputGroup>
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

        <SubmitButton variant="primary" onClick={() => handleSubmit()}>
          Submit
        </SubmitButton>
      </BaseForm>
    </>
  );
}

export default RegisterAdmin;
