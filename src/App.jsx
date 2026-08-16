import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Activities from "./pages/Activities.jsx";
import Team from "./pages/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
        <Route path="events" element={<Navigate to="/activities" replace />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}
