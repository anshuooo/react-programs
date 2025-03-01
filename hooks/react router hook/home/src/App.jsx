import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Home Component
function Home() {
  const navigate = useNavigate();

  // Navigate to the About page
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>
    </div>
  );
}

// About Component
function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
