import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Cadastro from "./pages/home/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}
// {/* <Index /> */}

export default App;
