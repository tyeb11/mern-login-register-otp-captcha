import { Route, Routes } from "react-router-dom";
import Register from "./Register.routes";
import User from "./User.routes";
import Edit from "./EditSlot.routes";
import GetDataRoute from "./GetDataRoute.routes";
import AddDataRoute from "./AddDataRoute.routes";

function Admin() {
  return (
    <Routes>
      <Route path="/register" index element={<Register />} />
      <Route path="/users" element={<User />} />
      <Route path="/slot/:slotId" element={<Edit />} />
      <Route path="/data" element={<GetDataRoute />} />
      <Route path="/add-data" element={<AddDataRoute />} />
    </Routes>
  );
}

export default Admin;
