import { useEffect, useState } from "react";
import MenuContext from "./MenuContext";

export default ({ children }) => {
  const [open, setOpen] = useState(false);

  function handleOpen(val = false) {
    setOpen(val);
  }

  function toggle() {
    setOpen(!open);
  }

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen: handleOpen,
        toggle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
