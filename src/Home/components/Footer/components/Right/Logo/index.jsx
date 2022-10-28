import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../../../../assets/Logo.svg";

function Logo() {
  return (
    <LogoContent>
      <StyledLogo />
      <BrandName>
        <span className="Digital">Digital</span>
        Scudero
      </BrandName>
    </LogoContent>
  );
}

const LogoContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;
  place-items: center;
`;

const StyledLogo = styled(LogoSvg)`
  width: 80%;
  height: 80%;
  fill: ${({ theme }) => theme.color.white};
`;

const BrandName = styled.span`
  transition: ${({ theme }) => theme.transition.x3};
  font-family: BDPBIRGULA, Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;
  height: 100%;

  .Digital {
    font-size: 0.4em;
    font-family: "Gothan";
    left: 0.4em;
    top: -0.3em;
    position: absolute;
  }
`;

export default Logo;
