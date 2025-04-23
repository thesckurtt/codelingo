// import { useEffect, useState } from "react";
import UlButtonSidebarApp from "./UlButtonSidebarApp";
import { useState } from "react";

const SidebarApp = ({ setModuleNow, handleClick, buttons, setRankingVisibility, rankingVisibility }) => {
  const btns = buttons.map((bt) => ({ ...bt, action: handleClick }));

  return (
    <div className="sidebar-dashboard-app max-345 w-100 min-vh-100 p-2 border-end-sm d-flex align-items-center flex-column">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.reload();
        }}
        className="img-container-sidebar-dashboard-app"
      >
        <img src="./img/logo_dashboard.svg" alt="logo codelingo" />
      </div>
      <ul className="ul-sidebar-dashboard-app d-flex flex-column">
        {btns.map((button) => {
          return (
            <li key={button.label}>
              <UlButtonSidebarApp
                label={button.label}
                onClick={button.action}
                className={`btn-duo btn-dashboard mt-2 ${button.active ? "active" : ""
                  }`}
              />
            </li>
          );
        })}
        <li>
          <UlButtonSidebarApp
            label={'Ranking'}
            onClick={setRankingVisibility}
            active={false}
            className={`btn-duo btn-dashboard mt-2 ${rankingVisibility ? "active" : ""
              }`}
          />
        </li>
      </ul>
    </div>
  );
};

export default SidebarApp;
