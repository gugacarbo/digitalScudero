import { createContext } from "react";

const MenuContext = createContext({
  open: false,
  setOpen: () => {},
  toggle: () => {},
  clickOut: () => {},
  ToggleRef: null,
});

export default MenuContext;
