import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import SidebarApp from "../../components/app/SidebarApp";
import MainDashboardApp from "../../components/app/MainDashboardApp"

const IndexApp = () => {
  document
    .querySelector("body")
    .setAttribute("class", "d-flex bg-dashboard-color body-dashboard min-vh-100");

    document.getElementById('root').setAttribute('class', 'd-flex bg-dashboard-color body-dashboard w-100 min-vh-100')
  const { user } = useAuth();
  return (
    <>
      <SidebarApp/>
      <MainDashboardApp />
    </>
  );
};

export default IndexApp;
