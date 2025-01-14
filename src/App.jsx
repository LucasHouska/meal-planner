import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meal from "./components/Meal"
import './App.css'
import Header from "./components/Header";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/meal" element={<Meal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
