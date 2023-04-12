import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
            <Card style={{ width: "80rem" }}>
              <Card.Body>
                <Card.Title>Name {value.candidate.name}</Card.Title>
                <Card.Title>Email {value.candidate.email}</Card.Title>
                <Card.Subtitle>
                  User Type {value.candidate.user_type}
                </Card.Subtitle>
                <Card.Subtitle>
                  Email Verified {value.candidate.email_verified ? "yes" : "no"}
                </Card.Subtitle>
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

export default AllUser;
