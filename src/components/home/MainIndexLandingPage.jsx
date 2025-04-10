import React from "react";
import ButtonDuoSuccess from "../ButtonDuoSuccess";

const MainSiteLandingPage = () => {
  return (
    <main className="main-site-lp limit_grid_sm">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="img-container-duo-home">
              <img src="./img/duo_dev.svg" alt="duo dev" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h1 className="fs-1 font-din-bold text-center">
                Aprenda inglês com lições curtas de programação
              </h1>
              <ButtonDuoSuccess
                id={"teste"}
                link={"/cadastro"}
                tag={"reactLink"}
                text={"Começar Agora"}
                classes={"btn-duo btn-success mt-2"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSiteLandingPage;
