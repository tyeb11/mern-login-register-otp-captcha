import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Book your Exam Slot here</h1>
      <Button onClick={() => navigate("/register")}>Register</Button>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </>
  );
}

export default Home;
