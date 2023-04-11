import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    console.log("hello");
    console.log(name);
    if (!name && !email && !password) {
      return;
    }
    const { data } = await axios.post("/api/auth/register", {
      name,
      email,
      password,
    });
    console.log(data);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <Form.Text className="text-muted">Enter your Name here</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">Enter your Email here</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">Enter your Password here</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Register;
