import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateWrapper } from "./Protexted";
import { Contacts, LoginPage } from "./screens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/auth/contacts"
          element={
            <PrivateWrapper>
              <Contacts />
            </PrivateWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
