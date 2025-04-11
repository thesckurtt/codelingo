import React, { useState } from "react";

const FooterMainDashboardApp = ({statusFooter}) => {
 

  switch (statusFooter) {
    case "default":
      return (
        <div className="footer-main-dashboard-app border-top-sm w-100 p-3 d-flex align-items-center justify-content-end px-4 bg-">
          <button className="btn-duo btn-dashboard">Avançar</button>
        </div>
      );
    case "correct":
      return (
        <div className="footer-main-dashboard-app bg-footer-correct-app border-top-sm w-100 p-3 d-flex align-items-center justify-content-between px-4 bg-">
          <span className=" text-footer-correct font-din-bold fs-3">
            <i class="fa-solid fs-5 p-2 rounded-5 bg-dashboard-color fa-check px-4 mx-2"></i>{" "}
            Resposta Correta
          </span>
          <button className="btn-duo btn-success text-dark">Avançar</button>
        </div>
      );
    case "incorrect":
      return;
    default:
      return;
  }
};

export default FooterMainDashboardApp;
