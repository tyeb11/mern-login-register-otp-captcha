import { Button } from "react-bootstrap";
import styled from "styled-components";

export const BaseButton = styled(Button)({});

export const SubmitButton = styled(BaseButton)({
  border: "2px solid black",
  padding: "10px",
  background: "white",
  color: "black",
  letterSpacing: ".4px",
  fontSize: "1.2rem",
  width: "400px",
  "&:hover": {
    background: "black",
    color: "white",
    border: "2px solid black",
  },
});

export const EditButton = styled(BaseButton)({
  border: "2px solid green",
  padding: "10px",
  background: "white",
  color: "green",
  letterSpacing: ".4px",
  fontSize: "1.2rem",

  width: "150px",
  "&:hover": {
    background: "green",
    color: "white",
    border: "2px solid green",
  },
});
export const DeleteButton = styled(BaseButton)({
  border: "2px solid red",
  padding: "10px",
  background: "white",
  color: "red",
  letterSpacing: ".4px",
  fontSize: "1.2rem",

  width: "150px",
  "&:hover": {
    background: "red",
    color: "white",
    border: "2px solid red",
  },
});
