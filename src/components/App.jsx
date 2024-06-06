import React, { useRef } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import GoogleAnalyticsTracker from "../components/GoogleAnalyticsTracker";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { Work, Education, Projects } from "../components/Experiences";
import Footer from "../components/Footer";
import "../scss/App.scss";

// Initialize routing and Google Analytics for page views
export default function App() {
  return (
    <>
      <GoogleAnalyticsTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

// Initialize page layout
function Layout() {
  const mainContentRef = useRef(null);
  return (
    <>
      <div className="column">
        <Intro mainContentRef={mainContentRef} />
      </div>
      <div ref={mainContentRef} className="column main-content">
        <Navbar mainContentRef={mainContentRef} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
