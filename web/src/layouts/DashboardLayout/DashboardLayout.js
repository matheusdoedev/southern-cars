import React from "react";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import "./DashboardLayout.styles.scss";

const DashboardLayout = ({ children }) => {
  return (
    <main className="dashboard-layout" data-modal="body">
      <SideBar />
      <section
        className="dashboard-content"
        title="dashboard-content"
        data-mobile="body"
      >
        <Header />
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
