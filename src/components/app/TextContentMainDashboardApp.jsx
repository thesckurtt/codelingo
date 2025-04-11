import React from "react";

const TextContentMainDashboardApp = ({title, text}) => {
  return (
    <div className="text-content-main-dashboard-app mt-5">
      <h1 className="text-white font-din-bold">{title}</h1>
      <p className="text-gray font-din-regular fs-5">
        {text}
      </p>
    </div>
  );
};

export default TextContentMainDashboardApp;
