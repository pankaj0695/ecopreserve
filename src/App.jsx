import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CommunityService from "./pages/community-service/CommunityService";
import ConflictResolution from "./pages/conflict-resolution/ConflictResolution";
import Feedback from "./pages/feedback/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community-service" element={<CommunityService />} />
        <Route path="/conflict-resolution" element={<ConflictResolution />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
