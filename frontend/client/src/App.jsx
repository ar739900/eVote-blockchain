import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import NoPage from "./../pages/NoPage";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "./../pages/dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
