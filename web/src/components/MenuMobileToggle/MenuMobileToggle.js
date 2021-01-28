import React from "react";

import useMenuMobile from "../../hooks/useMenuMobile";

import "./MenuMobileToggle.styles.scss";

const MenuMobileToggle = () => {
  const { handleActive } = useMenuMobile();

  return (
    <div
      className="menu-mobile-toggle"
      onClick={handleActive}
      data-mobile="toggle"
    >
      <span />
    </div>
  );
};

export default MenuMobileToggle;
