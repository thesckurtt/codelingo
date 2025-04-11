import React, { useEffect, useState } from "react";

const ProgressBarApp = ({ valueNowProgressBar }) => {
  
  return (
    <div
      className="progress bg-dashboard-progressbar rounded-5 w-100"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar bg-success rounded-5 bg-warning"
        style={{ width: `${valueNowProgressBar}%` }}
      ></div>
    </div>
  );
};

export default ProgressBarApp;
