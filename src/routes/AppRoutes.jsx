import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
