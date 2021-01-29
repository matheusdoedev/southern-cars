import { useState, useEffect } from "react";

const useMenuMobile = () => {
  // handle menu mobile activity state
  const [status, setStatus] = useState(false);

  // handle the menu mobile activy state change
  const handleActive = () => (status ? setStatus(false) : setStatus(true));

  useEffect(() => {
    // getting the menu mobile and the menu mobile toggle
    const menu = document.querySelector('[data-mobile="menu"]');
    const toggle = document.querySelector('[data-mobile="toggle"]');
    const body = document.querySelector('[data-mobile="body"]');

    // handle menu mobile behavior according to his state
    if (status) {
      menu?.classList.add("active");
      toggle?.classList.add("active");
      body?.classList.add("active");
      body.addEventListener("click", handleActive);
    } else {
      menu?.classList.remove("active");
      toggle?.classList.remove("active");
      body?.classList.remove("active");
      body.removeEventListener("click", handleActive);
    }
  }, [status]);

  return { handleActive };
};

export default useMenuMobile;
