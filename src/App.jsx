import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
import Cadastro from "./pages/home/Cadastro";
import IndexApp from "./pages/app/IndexApp";
import { AuthProvider } from "./contexts/AuthContext";

// const user = { username: "Mailan", profile_img: "./img/avatar_02.svg" };

function setUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    return `Erro: ${e}`;
  }
}

function getUser() {
  const isUser = localStorage.getItem("user");
  return JSON.parse(isUser);
}

function deleteSession() {
  localStorage.clear();
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/App" element={<IndexApp />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
// {/* <Index /> */}

export default App;
