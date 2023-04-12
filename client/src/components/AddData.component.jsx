import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddData() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [testDate, setTestDate] = useState("");
  const handleSubject = async () => {
    const { data } = await axios.post("/api/data/subject", {
      id: Cookies.get("id"),
      value: subject,
    });
    console.log(data);
  };
  const handleState = async () => {
    const { data } = await axios.post("/api/data/state", {
      id: Cookies.get("id"),
      value: state,
    });
    console.log(data);
  };
  const handleCity = async () => {
    const { data } = await axios.post("/api/data/city", {
      id: Cookies.get("id"),
      value: city,
    });
    console.log(data);
  };
  const handleTestDate = async () => {
    const { data } = await axios.post("/api/data/test-date", {
      id: Cookies.get("id"),
      value: testDate,
    });
    console.log(data);
  };
  const handleTimeSlot = async () => {
    const { data } = await axios.post("/api/data/time-slot", {
      id: Cookies.get("id"),
      value: timeSlot,
    });
    console.log(data);
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Enter OTP"
          />
          <Form.Text className="text-muted">Add Subject to DB</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleSubject()}>
          Add
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            placeholder="Enter OTP"
          />
          <Form.Text className="text-muted">Add State to DB</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleState()}>
          Add
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter OTP"
          />
          <Form.Text className="text-muted">Add City to DB</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleCity()}>
          Add
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Test Date</Form.Label>
          <Form.Control
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
            type="text"
            placeholder="DD/MM/YYYY"
          />
          <Form.Text className="text-muted">
            Add Test Date DD/MM/YYYY to DB
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleTestDate()}>
          Add
        </Button>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Time Slot</Form.Label>
          <Form.Control
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            type="text"
            placeholder="1:00 PM"
          />
          <Form.Text className="text-muted">Add Time Slot to DB</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => handleTimeSlot()}>
          Add
        </Button>
      </Form>
      <Button onClick={() => navigate("/admin/data")}>Get All Data</Button>
    </>
  );
}

export default AddData;
