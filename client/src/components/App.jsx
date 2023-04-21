import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterRoute from "./routes/user/Register.routes";
import { Container } from "react-bootstrap";
import VerifyOtpRoutes from "./routes/user/VerifyOtp.routes";
import AddSlotRoute from "./routes/user/AddSlot.routes";
import SlotRoute from "./routes/user/Slot.routes";
import Admin from "./routes/admin";
import Home from "./Home.component";

function App() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50vw",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/register" index element={<RegisterRoute />} />
            <Route path="/verify-otp" index element={<VerifyOtpRoutes />} />
            <Route path="/add-slot" index element={<AddSlotRoute />} />
            <Route path="/slot" index element={<SlotRoute />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
