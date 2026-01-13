import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Generator from "./pages/Generator";
import HeartRain from "./components/HeartRain";

function App() {
  return (
    <BrowserRouter>
      <HeartRain />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/love" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
