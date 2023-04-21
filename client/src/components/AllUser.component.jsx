import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiCalendar, BiTimeFive } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";

function AllUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("/api/admin/all-user", {
          params: { id: Cookies.get("id") },
        });
        setUserData(data);
      } catch (e) {
        navigate("/");
      }
    }
    getData();
  }, []);
  return (
    <>
      {userData.map((value) => {
        return (
          <>
            <Card
              onClick={() => navigate(`/admin/slot/${value._id}`)}
              style={{ width: "100%", margin: "20px", cursor: "pointer" }}
            >
              <Card.Body
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Card.Title style={{ marginTop: "20px", fontSize: "2rem" }}>
                  {value.candidate.name}
                </Card.Title>
                <Card.Title>{value.candidate.email}</Card.Title>
                <Card.Subtitle
                  style={{ position: "absolute", left: "5px", bottom: "5px" }}
                >
                  <AiOutlineUser /> {value.candidate.user_type}
                </Card.Subtitle>
                <Card.Subtitle
                  style={{ position: "absolute", right: "5px", bottom: "5px" }}
                >
                  Email Verified{" "}
                  {value.candidate.email_verified ? <FaCheck /> : <ImCross />}
                </Card.Subtitle>
                <Card.Title>Subject {value.subject}</Card.Title>
                <Card.Subtitle style={{ position: "absolute", right: "5px" }}>
                  <BiCalendar />
                  {value.test_date}
                </Card.Subtitle>
                <Card.Subtitle style={{ position: "absolute", left: "5px" }}>
                  <BiTimeFive />
                  {value.time_slot}
                </Card.Subtitle>
                <Card.Subtitle>
                  {value.state},{value.city}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default AllUser;
