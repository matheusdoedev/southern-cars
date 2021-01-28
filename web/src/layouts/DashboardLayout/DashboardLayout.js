import React from "react";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import useMenuMobile from "../../hooks/useMenuMobile";

import "./DashboardLayout.styles.scss";

const DashboardLayout = ({ children }) => {
  const { handleActive } = useMenuMobile();

  return (
    <main className="dashboard-layout" data-modal="body">
      <SideBar />
      <section
        className="dashboard-content"
        title="dashboard-content"
        data-mobile="body"
        onClick={handleActive}
      >
        <Header />
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
