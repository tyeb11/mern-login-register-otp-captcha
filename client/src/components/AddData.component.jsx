import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BaseForm } from "../styles/Form.styles";
import { SubmitButton, EditButton } from "../styles/Button.styles";

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
      <BaseForm style={{ gap: "10px", marginTop: "10px" }}>
        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              style={{
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
                borderRadius: "0",
              }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Add Subject"
            />
            <SubmitButton
              style={{ width: "100px" }}
              variant="primary"
              onClick={() => handleSubject()}
            >
              Add
            </SubmitButton>
          </div>
        </Form.Group>

        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              style={{
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
                borderRadius: "0",
              }}
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="Add State"
            />
            <SubmitButton
              style={{ width: "100px" }}
              variant="primary"
              onClick={() => handleState()}
            >
              Add
            </SubmitButton>
          </div>
        </Form.Group>

        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              style={{
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
                borderRadius: "0",
              }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Add City"
            />
            <SubmitButton
              style={{ width: "100px" }}
              variant="primary"
              onClick={() => handleCity()}
            >
              Add
            </SubmitButton>
          </div>
        </Form.Group>

        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              style={{
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
                borderRadius: "0",
              }}
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              type="text"
              placeholder="Add DD/MM/YYYY"
            />
            <SubmitButton
              style={{ width: "100px" }}
              variant="primary"
              onClick={() => handleTestDate()}
            >
              Add
            </SubmitButton>
          </div>
        </Form.Group>

        <Form.Group
          style={{ width: "100%" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              style={{
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
                borderRadius: "0",
              }}
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              type="text"
              placeholder="Add 1:00 PM"
            />
            <SubmitButton
              style={{ width: "100px" }}
              variant="primary"
              onClick={() => handleTimeSlot()}
            >
              Add
            </SubmitButton>
          </div>
        </Form.Group>

        <EditButton
          style={{ marginTop: "40px" }}
          onClick={() => navigate("/admin/data")}
        >
          Get All Data
        </EditButton>
      </BaseForm>
    </>
  );
}

export default AddData;
