import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Cadastro from "./pages/home/Cadastro";
import IndexApp from "./pages/app/IndexApp";
import { AuthProvider } from "./contexts/AuthContext";
import Logout from "./pages/Logout";
import ProtectedRoute from "./pages/routes/ProtectedRoute";

// const user = { username: "Mailan", profile_img: "./img/avatar_02.svg" };

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/App" element={<ProtectedRoute><IndexApp /></ProtectedRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
