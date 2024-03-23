import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OpenDay from "./openday";
import Page from "./page";
import Program from "./program";

function App() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <Routes>
          <Route exact path="/" element={<OpenDay />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/program/:id" element={<Program />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
