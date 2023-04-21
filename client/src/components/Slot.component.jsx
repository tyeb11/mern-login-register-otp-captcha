import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { BiTimeFive, BiCalendar } from "react-icons/bi";

function Slot() {
  const navigate = useNavigate();
  const [slotData, setSlotData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("/api/slot", {
          params: { id: Cookies.get("id") },
        });
        setSlotData(data.slots);
      } catch (e) {
        navigate("/");
      }
    }
    getData();
  }, []);
  return (
    <>
      {slotData.map((value) => {
        return (
          <>
            <Card style={{ width: "100%", margin: "20px" }}>
              <Card.Body
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Card.Subtitle style={{ position: "absolute", left: "5px" }}>
                  <BiTimeFive /> {value.time_slot}
                </Card.Subtitle>
                <Card.Subtitle style={{ position: "absolute", right: "5px" }}>
                  <BiCalendar /> {value.test_date}
                </Card.Subtitle>
                <Card.Title style={{ marginTop: "20px", fontSize: "1.7rem" }}>
                  {value.subject}
                </Card.Title>
                <Card.Subtitle>
                  {value.state}, {value.city}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default Slot;
