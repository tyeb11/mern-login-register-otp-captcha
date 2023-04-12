import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GetData() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [testDate, setTestDate] = useState([]);
  const [timeSlot, setTimeSlot] = useState([]);
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
    getData();
  }, []);
  return (
    <>
      <Card style={{ width: "80rem" }}>
        <Card.Body>
          <Card.Title>Subject</Card.Title>
          {subject.map((value) => (
            <Card.Subtitle>{value}</Card.Subtitle>
          ))}
        </Card.Body>
      </Card>
      <Card style={{ width: "80rem" }}>
        <Card.Body>
          <Card.Title>State</Card.Title>
          {state.map((value) => (
            <Card.Subtitle>{value}</Card.Subtitle>
          ))}
        </Card.Body>
      </Card>
      <Card style={{ width: "80rem" }}>
        <Card.Body>
          <Card.Title>City</Card.Title>
          {city.map((value) => (
            <Card.Subtitle>{value}</Card.Subtitle>
          ))}
        </Card.Body>
      </Card>
      <Card style={{ width: "80rem" }}>
        <Card.Body>
          <Card.Title>Test Date</Card.Title>
          {testDate.map((value) => (
            <Card.Subtitle>{value}</Card.Subtitle>
          ))}
        </Card.Body>
      </Card>
      <Card style={{ width: "80rem" }}>
        <Card.Body>
          <Card.Title>Time Slot</Card.Title>
          {timeSlot.map((value) => (
            <Card.Subtitle>{value}</Card.Subtitle>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}

export default GetData;
