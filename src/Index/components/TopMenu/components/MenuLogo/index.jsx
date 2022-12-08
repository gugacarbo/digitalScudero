import { MenuTopLogoContent, MenuIcon, MenuText } from "./Styled";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function MenuLogo({ scrolled }) {
  const location = useLocation();
  var LinkConfig = {};

  if (location.pathname == "/") {
    LinkConfig = {
      as: ScrollLink,
      activeClass: "Selected",
      to: "Home",
      smooth: "easeInOutCubic",
      offset: 0,
      duration: 850,
    };
  } else {
    LinkConfig = {
      as: Link,
      to: "/",
    };
  }
  return (
    <MenuTopLogoContent {...LinkConfig}>
      <MenuIcon scrolled={scrolled ? 1 : 0} />
      <MenuText scrolled={scrolled ? 1 : 0}>
        Scudero
        <span className="Digital">Digital</span>
      </MenuText>
    </MenuTopLogoContent>
  );
}

export default MenuLogo;
