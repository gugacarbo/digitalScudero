import { MenuTopLogoContent, MenuIcon, MenuText } from "./Styled";
function MenuLogo({ scrolled }) {
  return (
    <MenuTopLogoContent>
      <MenuIcon scrolled={scrolled ? 1 : 0}/>
      <MenuText scrolled={scrolled ? 1 : 0}>Scudero
        <span className="Digital">Digital</span>
      </MenuText>
    </MenuTopLogoContent>
  );
}

export default MenuLogo;
