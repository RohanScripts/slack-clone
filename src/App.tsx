import { Outlet, Route, Routes } from "react-router";
import { Login } from "@/modules/login/Login";
import Layout from "./Layout/Layout";
import { Signup } from "@/modules/signup/Signup";
import { Dashboard } from "./modules/Dashboard/Dashboard";
import { DashLayout } from "./Layout/DashLayout";

const AuthLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const DashboardLayout = () => {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
