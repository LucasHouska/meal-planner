import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import './App.css'
import Header from "./components/Header";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/meal" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
