import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Paste from "./pages/Paste.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paste/:id" element={<Paste />} />
      </Routes>
    </BrowserRouter>
  );
}
