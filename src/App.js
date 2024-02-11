import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Frontend from "./Frontend";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
