import { LogoIcon, LogoContainer, LogoText, Digital } from "./Styled";
function Logo() {
  return (
    <LogoContainer to="/">
      <LogoIcon />
      <LogoText>
        <Digital>Digital</Digital>Scudero
      </LogoText>
    </LogoContainer>
  );
}

export default Logo;
