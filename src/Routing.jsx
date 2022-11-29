import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Groups from "./Components/Pages/Groups";
import Students from "./Components/Pages/Students";
import Layout from "./Components/Layout"

function Routing() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="groups" element={<Groups />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
