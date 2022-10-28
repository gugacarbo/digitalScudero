import { useContext } from "react";
import { MenuTogglerIcon,  MenuToggleBox } from "./Styled";
import MenuContext from "../../../../../context/MenuContext";

function MenuToggle({ scrolled }) {
  const { toggle, open } = useContext(MenuContext);
  return (
    <MenuToggleBox onClick={() => toggle()}>
      <MenuTogglerIcon open={open ? 1 : 0} />
    </MenuToggleBox>
  );
}
export default MenuToggle;
