import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Inquiry from "../pages/InquiryForm";

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Welcome />} />
        <Route path='/inquiry' element={<Inquiry />} />
    </Routes>
    </>
  );
};

export default AllRoutes;
