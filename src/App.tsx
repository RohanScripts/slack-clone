import { Route, Routes } from "react-router";
import Login from "./modules/login/Login";
import Signup from "./modules/login/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
