import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Form, Button } from "react-bootstrap";

function EditSlot() {
  const navigate = useNavigate();
  const { slotId } = useParams();
  const [subject, setsubject] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [testDate, settestDate] = useState("");
  const [timeSlot, settimeSlot] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/admin/slot/${slotId}`, {
          params: { id: Cookies.get("id") },
        });
        console.log(data);
        setcity(data.city);
        setstate(data.state);
        setsubject(data.subject);
        settestDate(data.test_date);
        settimeSlot(data.time_slot);
      } catch (e) {
        navigate("/");
      }
    };
    getData();
  }, []);
  const handleEdit = async () => {
    const { data } = await axios.patch("/api/admin/slot", {
      id: Cookies.get("id"),
      slotId,
      state,
      city,
      subject,
      test_date: testDate,
      time_slot: timeSlot,
    });
    console.log(data);
  };
  const handleDelete = async () => {
    const { data } = await axios.delete("/api/admin/slot", {
      params: { id: Cookies.get("id"), slotId },
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
            onChange={(e) => setsubject(e.target.value)}
            type="text"
            placeholder={subject}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control
            value={state}
            onChange={(e) => setstate(e.target.value)}
            type="text"
            placeholder={state}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setcity(e.target.value)}
            type="text"
            placeholder={city}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Test Date</Form.Label>
          <Form.Control
            value={testDate}
            onChange={(e) => settestDate(e.target.value)}
            type="text"
            placeholder={testDate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Time Slot</Form.Label>
          <Form.Control
            value={timeSlot}
            onChange={(e) => settimeSlot(e.target.value)}
            type="text"
            placeholder={timeSlot}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleEdit()}>
          Edit
        </Button>
        <Button variant="primary" onClick={() => handleDelete()}>
          Delete
        </Button>
      </Form>
    </>
  );
}

export default EditSlot;
