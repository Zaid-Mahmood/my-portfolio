import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./Components/Footer"
import "./App.css";
function App() {
  return (
    <div className="App">
         <ToastContainer
position="top-right"
theme="dark"
/>
      <BrowserRouter>
        <Navbar />
        <div className="verticalBackground">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
            <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
