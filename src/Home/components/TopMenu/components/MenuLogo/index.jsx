import { MenuTopLogoContent, MenuIcon, MenuText } from "./Styled";
function MenuLogo({ scrolled }) {
  return (
    <MenuTopLogoContent>
      <MenuIcon scrolled={scrolled}/>
      <MenuText scrolled={scrolled}>Scudero
        <span className="Digital">Digital</span>
      </MenuText>
    </MenuTopLogoContent>
  );
}

export default MenuLogo;
