import { Route, Routes } from "react-router";
import { Login } from "@/modules/login/Login";
import Layout from "./Layout/Layout";
import { Signup } from "@/modules/login/Signup";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
