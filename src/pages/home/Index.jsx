import Header from "../../components/Header";
import MainSiteLandingPage from "../../components/home/MainIndexLandingPage";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Index = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/App" replace />;
  }
  return (
    <>
      <Header />
      <MainSiteLandingPage />
    </>
  );
};

export default Index;
