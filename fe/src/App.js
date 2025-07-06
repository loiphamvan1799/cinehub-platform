import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./pages/top/index.page";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </Router>
  );
}

export default App;