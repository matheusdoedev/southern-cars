import React from "react";

import useMenuMobile from "../../hooks/useMenuMobile";

import "./MenuMobileToggle.styles.scss";

export default function MenuMobileToggle() {
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
}
