import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Generator from "./components/Generator";
import MealPlan from "./components/MealPlan";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generators" element={<Generator />} />
          <Route path="/meal-plan" element={<MealPlan />} />          
        </Routes>
      </Router>
    </>
  );
}

export default App
