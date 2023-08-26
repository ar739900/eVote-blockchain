import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../pages/Layout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import NoPage from "./../pages/NoPage";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "./../pages/dashboard";
import DashboardLayout from "../pages/DashboardLayout";
import DashboardHome from "./components/DashboardHome";
import AddCandidate from "./components/Addcandidate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="add-candidate" element={<AddCandidate />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
