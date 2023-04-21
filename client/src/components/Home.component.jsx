import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SubmitButton, EditButton } from "../styles/Button.styles";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Book your Exam Slot here</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <EditButton onClick={() => navigate("/login")}>Login</EditButton>
        <SubmitButton
          style={{ width: "150px" }}
          onClick={() => navigate("/register")}
        >
          Register
        </SubmitButton>
      </div>
    </>
  );
}

export default Home;
