import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import Personajes from "./Components/Personajes";
import NotFound from "./Components/NotFound";
import Card from "./Components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personajes" element={<Personajes />} />
          <Route path="/Personajes/:name" element={<Card />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
