import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Characters from "../pages/Characters/Characters";
import Details from "../pages/Details/Details";

const RouterWrapper = () => {
  return (
    <Routes>
      <Route index element={<Characters />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default RouterWrapper;
