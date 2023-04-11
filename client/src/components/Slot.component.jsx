import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function Slot() {
  const [slotData, setSlotData] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/api/slot");
      setSlotData(data.slots);
    }
    getData();
  }, []);
  return (
    <>
      {slotData.map((value) => {
        return (
          <>
            <Card style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>Subject {value.subject}</Card.Title>
                <Card.Subtitle>Test Date {value.test_date}</Card.Subtitle>
                <Card.Subtitle>Time Slot {value.time_slot}</Card.Subtitle>
                <Card.Subtitle>City {value.city}</Card.Subtitle>
                <Card.Subtitle>State {value.state}</Card.Subtitle>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default Slot;
