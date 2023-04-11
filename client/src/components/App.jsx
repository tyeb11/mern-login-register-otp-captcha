import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterRoute from "./routes/user/Register.routes";
import { Container } from "react-bootstrap";
import VerifyOtpRoutes from "./routes/user/VerifyOtp.routes";
import AddSlotRoute from "./routes/user/AddSlot.routes";
import SlotRoute from "./routes/user/Slot.routes";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterRoute />} />
            <Route path="/verify-otp" element={<VerifyOtpRoutes />} />
            <Route path="/add-slot" element={<AddSlotRoute />} />
            <Route path="/slot" element={<SlotRoute />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
