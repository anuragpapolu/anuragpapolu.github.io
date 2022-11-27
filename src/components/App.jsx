import { useRef } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import { Work, Education, Projects } from '../components/Experiences';
import Footer from '../components/Footer';
import '../scss/App.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Work /> } />
        <Route path="education" element={ <Education />} />
        <Route path="projects" element={ <Projects />} />
        <Route path="*" element={ <Navigate to="/"/> } />
      </Route>
    </Routes>
  );
}

function Layout() {
  const mainContentRef = useRef(null)
  return (
    <>
      <div className="column">
        <Jumbotron mainContentRef={ mainContentRef } />
      </div>
      <div ref= { mainContentRef } className="column">
        <Navbar/>
        <Outlet/>
        <Footer/>
       </div>
    </>
  );
}
