import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;
