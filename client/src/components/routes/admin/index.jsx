import { Route, Routes } from "react-router-dom";
import Register from "./Register.routes";
import User from "./User.routes";
import Edit from "./EditSlot.routes";

function Admin() {
  return (
    <Routes>
      <Route path="/register" index element={<Register />} />
      <Route path="/users" element={<User />} />
      <Route path="/edit-slot" element={<Edit />} />
    </Routes>
  );
}

export default Admin;
