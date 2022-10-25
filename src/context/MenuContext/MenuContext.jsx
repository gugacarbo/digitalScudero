import { createContext } from "react";

const MenuContext = createContext({
  open: false,
  setOpen: () => {},
  toggle: () => {},
});

export default MenuContext;
