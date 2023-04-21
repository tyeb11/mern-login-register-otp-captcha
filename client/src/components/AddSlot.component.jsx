import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BaseForm } from "../styles/Form.styles";
import { SubmitButton, EditButton } from "../styles/Button.styles";
function AddSlot() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [testDate, setTestDate] = useState([]);
  const [timeSlot, setTimeSlot] = useState([]);

  const [subjectValue, setSubjectValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [testDateValue, setTestDateValue] = useState("");
  const [timeSlotValue, setTimeSlotvalue] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setSubject(
          (
            await axios.get("/api/data/subject", {
              params: { id: Cookies.get("id") },
            })
          ).data
        );
        setState(
          (
            await axios.get("/api/data/state", {
              params: { id: Cookies.get("id") },
            })
          ).data
        );
        setCity(
          (
            await axios.get("/api/data/city", {
              params: { id: Cookies.get("id") },
            })
          ).data
        );
        setTestDate(
          (
            await axios.get("/api/data/test-date", {
              params: { id: Cookies.get("id") },
            })
          ).data
        );
        setTimeSlot(
          (
            await axios.get("/api/data/time-slot", {
              params: { id: Cookies.get("id") },
            })
          ).data
        );
      } catch (e) {
        navigate("/");
      }
    };
    try {
      getData();
    } catch (e) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    setStateValue(state[0]);
    setSubjectValue(subject[0]);
    setCityValue(city[0]);
    setTimeSlotvalue(timeSlot[0]);
    setTestDateValue(testDate[0]);
  }, [subject, state, city, testDate, timeSlot]);
  const handleSubmit = async () => {
    const { data } = await axios.post("/api/slot", {
      id: Cookies.get("id"),
      subject: subjectValue,
      city: cityValue,
      time_slot: timeSlotValue,
      test_date: testDateValue,
      state: stateValue,
    });
    console.log(data);
  };
  return (
    <>
      <BaseForm style={{ gap: "10px" }}>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label>State</Form.Label>
          <Form.Select
            style={{ border: "2px solid black" }}
            size="lg"
            onChange={(e) => setStateValue(e.currentTarget.value)}
          >
            {state.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label>City</Form.Label>
          <Form.Select
            style={{ border: "2px solid black" }}
            size="lg"
            onChange={(e) => setCityValue(e.currentTarget.value)}
          >
            {city.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label>Subject</Form.Label>
          <Form.Select
            style={{ border: "2px solid black" }}
            size="lg"
            onChange={(e) => setSubjectValue(e.currentTarget.value)}
          >
            {subject.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label>Time Slot</Form.Label>
          <Form.Select
            style={{ border: "2px solid black" }}
            size="lg"
            onChange={(e) => setTimeSlotvalue(e.currentTarget.value)}
          >
            {timeSlot.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label>Test Date</Form.Label>
          <Form.Select
            style={{ border: "2px solid black" }}
            size="lg"
            onChange={(e) => setTestDateValue(e.currentTarget.value)}
          >
            {testDate.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </BaseForm>
      <div style={{ display: "flex", gap: "50px", marginTop: "40px" }}>
        <EditButton onClick={() => navigate("/slot")}>Booked Slots</EditButton>
        <SubmitButton
          style={{ width: "150px" }}
          variant="primary"
          onClick={() => handleSubmit()}
        >
          Add Slot
        </SubmitButton>
      </div>
    </>
  );
}

export default AddSlot;
