import React, { useState } from "react";

const FooterMainDashboardApp = ({
  statusFooter,
  btnLabel,
  question_id,
  moduleId,
  handleClick,
  isIntro,
  isModuleEnd,
  moduleNow,
  setModuleNow,
  appModulesLength,
}) => {
  switch (statusFooter) {
    case "default":
      return (
        <div className="footer-main-dashboard-app border-top-sm w-100 p-3 d-flex align-items-center justify-content-end px-4 bg-">
          {!isModuleEnd && (
            <button
              className="btn-duo btn-dashboard"
              data-module-id={moduleId}
              onClick={(e) => {
                handleClick(e, moduleId, question_id);
              }}
            >
              {btnLabel}
            </button>
          )}
          {isModuleEnd && moduleNow < appModulesLength  && (
            <button
              className="btn-duo btn-dashboard"
              data-module-id={moduleId}
              onClick={() => {
                setModuleNow(moduleNow + 1);
              }}
            >
              Próximo Módulo
            </button>
          )}
        </div>
      );
    case "correct":
      return (
        <div className="footer-main-dashboard-app bg-footer-correct-app border-top-sm w-100 p-3 d-flex align-items-center justify-content-between px-4 bg-">
          <span className="text-footer-correct font-din-bold fs-3">
            <i className="fa-solid fs-5 p-2 rounded-5 bg-dashboard-color fa-circle-check px-4 mx-2"></i>{" "}
            Resposta Correta
          </span>
          {!isModuleEnd && (
            <button
              className="btn-duo btn-success text-dark"
              onClick={(e) => {
                handleClick(e, moduleId, question_id);
              }}
            >
              {btnLabel}
            </button>
          )}
          {isModuleEnd && moduleNow < appModulesLength  && (
            <button
              className="btn-duo btn-success text-dark"
              data-module-id={moduleId}
              onClick={() => {
                setModuleNow(moduleNow + 1);
              }}
            >
              Próximo Módulo
            </button>
          )}
        </div>
      );
    case "incorrect":
      return (
        <div className="footer-main-dashboard-app bg-footer-correct-app border-top-sm w-100 p-3 d-flex align-items-center justify-content-between px-4 bg-">
          <span className="text-footer-incorrect font-din-bold fs-3">
            {/* <i class="fa-solid fs-5 p-2 rounded-5 bg-dashboard-color fa-check px-4 mx-2"></i>{" "} */}
            <i className="fa-solid fa-circle-xmark fs-5 p-2 rounded-5 bg-dashboard-color px-4 mx-2"></i>{" "}
            Resposta Incorreta
          </span>
          {!isModuleEnd && (
            <button
              className="btn-duo btn-success text-dark"
              onClick={(e) => {
                handleClick(e, moduleId, question_id);
              }}
            >
              {btnLabel}
            </button>
          )}
          {isModuleEnd && moduleNow < appModulesLength  && (
            <button
              className="btn-duo btn-success text-dark"
              data-module-id={moduleId}
              onClick={() => {
                setModuleNow(moduleNow + 1);
              }}
            >
              Próximo Módulo
            </button>
          )}
        </div>
      );
    default:
      return;
  }
};

export default FooterMainDashboardApp;
