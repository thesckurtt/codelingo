// import { useEffect, useState } from "react";
import UlButtonSidebarApp from "./UlButtonSidebarApp";
import usePersistentState from "../../utils/usePersistentState";

const SidebarApp = () => {
  const [buttons, setButtons] = usePersistentState("buttons", [
    { label: "Introdução", active: false },
    { label: "Módulo 1", active: false },
    { label: "Módulo 2", active: false },
    { label: "Perfil", active: false },
  ]);

  function handleClick(e) {
    const updated = buttons.map((button) => {
      if (
        button.label.toLowerCase() == e.target.innerText.trim().toLowerCase()
      ) {
        button.active = true;
        return button;
      } else {
        button.active = false;
        return button;
      }
    });
    setButtons([...updated]);
  }
  const btns = buttons.map((bt) => ({ ...bt, action: handleClick }));

  return (
    <div className="sidebar-dashboard-app max-345 w-100 min-vh-100 p-2 border-end-sm d-flex align-items-center flex-column">
      <div className="img-container-sidebar-dashboard-app">
        <img src="./img/logo_dashboard.svg" alt="logo codelingo" />
      </div>
      <ul className="ul-sidebar-dashboard-app d-flex flex-column">
        {btns.map((button) => {
          return (
            <li key={button.label}>
              <UlButtonSidebarApp
                label={button.label}
                onClick={button.action}
                active={button.active}
                className={`btn-duo btn-dashboard mt-2 ${
                  button.active ? "active" : ""
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarApp;
