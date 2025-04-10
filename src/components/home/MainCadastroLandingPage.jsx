import React, { use, useState } from "react";
import ButtonDuoSuccess from "../ButtonDuoSuccess";

const MainCadastroLandingPage = ({ login }) => {
  // const persons = [
  //   { id: "1", img: "./img/avatar_01.svg", active: false },
  //   { id: "2", img: "./img/avatar_02.svg", active: false },
  //   { id: "3", img: "./img/avatar_03.svg", active: false },
  // ];

  const [userAvatar, setUserAvatar] = useState("");
  const [username, setUsername] = useState("");

  const [avatar, setAvatar] = useState([
    { id: "1", img: "./img/avatar_01.svg", active: false },
    { id: "2", img: "./img/avatar_02.svg", active: false },
    { id: "3", img: "./img/avatar_03.svg", active: false },
  ]);

  function toggleAvatarActive(id) {
    // const updated = avatar.map((person) => ({
    //   ...person,
    //   active: person.id === id,
    // }));

    const updated = avatar.map((person) => {
      if (id == person.id) {
        person.active = true;
        setUserAvatar(person.img);
      } else {
        person.active = false;
      }
      return person;
    });

    setAvatar(updated);
  }

  function handleClick() {
    const user = { username: username, profile_img: userAvatar };
    login(user);
  }

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
                {avatar.map((person) => {
                  return (
                    <div
                      key={person.id}
                      onClick={() => {
                        toggleAvatarActive(person.id);
                      }}
                      className={`container-choice-avatar-img ${
                        person.active ? "active" : ""
                      }`}
                    >
                      <img src={person.img} alt="" />
                    </div>
                  );
                })}
                {/* <div className="container-choice-avatar-img">
                  <img src="./img/avatar_01.svg" alt="" />
                </div>
                <div className="container-choice-avatar-img">
                  <img src="./img/avatar_02.svg" alt="" />
                </div>
                <div className="container-choice-avatar-img">
                  <img src="./img/avatar_03.svg" alt="" />
                </div> */}
              </div>
            </div>
            <div className="choice-username d-flex flex-column">
              <span className="fs-4 font-din-bold">Crie seu nickname</span>
              <input
                type="text"
                className="input-duo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="fs-6 color-danger font-din-bold d-none">
                Alerta! Lorem Ipsum.
              </span>
            </div>
            {/* <button className="btn-duo btn-success mt-5 mb-4">Começar Agora</button> */}
            <ButtonDuoSuccess
              // id={"ee"}
              // link={"/"}
              // tag={"reactLink"}
              tag={"button"}
              text={"Vamos lá"}
              classes={"btn-duo btn-success mt-5 mb-4"}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainCadastroLandingPage;
