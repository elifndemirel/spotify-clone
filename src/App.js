import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Premium from "./pages/Premium";
import Support from "./pages/Support";
import Download from "./pages/Download";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/premium" element={<Premium />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/download" element={<Download />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-reset" element={<PasswordReset />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
