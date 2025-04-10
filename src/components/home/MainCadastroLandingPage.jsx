import React from "react";
import ButtonDuoSuccess from "../ButtonDuoSuccess";

const MainCadastroLandingPage = () => {
  return (
    <main className="main-site-lp limit_grid_sm">
      <div className="container max-500">
        <div className="row d-flex align-items-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-center font-din-bold mb-4">
              Ei, tá na hora de montar o<br />
              seu perfil
            </h1>
            <div className="choice-avatar mb-4">
              <span className="fs-4 font-din-bold">Escolha seu avatar</span>
              <div className="container-choice-avatar d-flex gap-4 mt-3">
                <div className="container-choice-avatar-img">
                  <img src="./img/avatar_01.svg" alt="" />
                </div>
                <div className="container-choice-avatar-img">
                  <img src="./img/avatar_02.svg" alt="" />
                </div>
                <div className="container-choice-avatar-img">
                  <img src="./img/avatar_03.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="choice-username d-flex flex-column">
              <span className="fs-4 font-din-bold">Crie seu nickname</span>
              <input type="text" className="input-duo" />
              <span className="fs-6 color-danger font-din-bold d-none">
                Alerta! Lorem Ipsum.
              </span>
            </div>
            {/* <button className="btn-duo btn-success mt-5 mb-4">Começar Agora</button> */}
            <ButtonDuoSuccess
              id={"ee"}
              link={"/"}
              tag={"reactLink"}
              text={"Começar Agora"}
              classes={"btn-duo btn-success mt-5 mb-4"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainCadastroLandingPage;
