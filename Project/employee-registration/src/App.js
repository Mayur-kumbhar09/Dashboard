import React from "react";
import SignUp from "./component/SignUp";
import { SignIn } from "./component/SignIn";
// import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import EnterPrivacyCode from "./component/EnterPrivacyCode";
import StepOne from "./component/steps/StepOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/entercode" element={<EnterPrivacyCode />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/application/firstform" element={<StepOne/>} />
      </Routes>
    </Router>
  );
}
export default App;
