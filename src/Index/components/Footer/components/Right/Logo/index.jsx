import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../../../../assets/Logo.svg";

import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

function Logo() {
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
    <LogoContent {...LinkConfig}>
      <StyledLogo />
      <BrandName>
        <span className="Digital">Digital</span>
        Scudero
      </BrandName>
    </LogoContent>
  );
}

const LogoContent = styled(Link)`
  display: grid;
  width: 100%;
  cursor: pointer;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  place-items: center;
`;

const StyledLogo = styled(LogoSvg)`
  width: 60%;
  height: 60%;
  fill: ${({ theme }) => theme.color.white};
  @media screen and (max-width: 520px) {
    width: 65%;
    height: 65%;
  }
`;

const BrandName = styled.span`
  transition: ${({ theme }) => theme.transition.x3};
  font-family: BDPBIRGULA, Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;

  @media screen and (max-width: 520px) {
    font-size: 3rem;
  }
  .Digital {
    font-size: 0.4em;
    font-family: "Gotham";
    left: 0.4em;
    top: -0.3em;
    position: absolute;
  }
`;

export default Logo;
