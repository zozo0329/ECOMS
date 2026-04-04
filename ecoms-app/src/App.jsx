import React from "react";
import LandingPage from "./Components/01.LandingPage/01.LandingPageMain/LandingPage";
import SignUpMain from "./Components/01.LandingPage/Routes/SignUp/01.SignUpMain/SignUpMain";
import { Routes, Route } from "react-router-dom";
import SignInMain from "./Components/01.LandingPage/Routes/SignIn/01.SignInMain/SignInMain";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUpMain />} />
        <Route path="/signIn" element={<SignInMain />} />
      </Routes>
    </>
  );
}

export default App;
