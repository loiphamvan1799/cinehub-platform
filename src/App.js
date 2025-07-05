import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./pages/top/Top";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;