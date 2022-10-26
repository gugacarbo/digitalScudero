import { useContext, forwardRef } from "react";
import { MenuTogglerIcon, MenuToggleText, MenuToggleBox } from "./Styled";
import MenuContext from "../../../../../context/MenuContext/MenuContext";

function MenuToggle({ scrolled }) {
  const { toggle, open, ToggleRef } = useContext(MenuContext);
  return (
    <MenuToggleBox onClick={() => toggle()} ref={ToggleRef}>
      <MenuToggleText scrolled={scrolled ? 1 : 0} open={open ? 1 : 0}>
        MENU
      </MenuToggleText>
      <MenuTogglerIcon open={open ? 1 : 0} />
    </MenuToggleBox>
  );
}
export default MenuToggle;
