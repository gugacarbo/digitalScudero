import { useContext } from "react";
import { MenuTogglerIcon, MenuToggleBox } from "./Styled";
import MenuContext from "../../../../../context/MenuContext";

function MenuToggle() {
  const { setOpen, open } = useContext(MenuContext);
  return (
    <MenuToggleBox onClick={() => setOpen(false)}>
      <MenuTogglerIcon open={open ? 1 : 0} />
    </MenuToggleBox>
  );
}
export default MenuToggle;
