import Header from "../../components/Header";
import MainCadastroLandingPage from "../../components/home/MainCadastroLandingPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

const Cadastro = () => {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  // Redireciona para o App se já tiver logado
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/App");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Header />
      <MainCadastroLandingPage login={login}/>
    </>
  );
};

export default Cadastro;
