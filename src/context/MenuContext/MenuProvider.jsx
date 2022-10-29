import { createRef, useEffect, useRef, useState } from "react";
import MenuContext from "./index";

export default ({ children }) => {
  const [open, setOpen] = useState(false);
  const ToggleRef = useRef();

  function handleOpen(val = false) {
    if (val) {
      setOpen(val);
    } else {
      setOpen(false);
    }
  }

  function toggle() {
    setOpen(!open);
  }

  function clickOut(e) {
    if (
      e.target !== ToggleRef.current &&
      e.target.parentNode !== ToggleRef.current
    ) {
      setOpen(false);
    }
  }

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen: handleOpen,
        toggle,
        clickOut,
        ToggleRef,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
