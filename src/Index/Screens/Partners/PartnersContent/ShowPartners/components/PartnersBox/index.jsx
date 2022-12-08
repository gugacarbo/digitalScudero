import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../../../../../assets/Logo.svg";

function PartnersBox() {
  return (
    <PartnersBoxContent>
      <Partner>
        <PartnerLogo to="/parceiro/carbomaq">
          <Logo />
        </PartnerLogo>
      </Partner>
      <Partner>
        <PartnerLogo to="/parceiro/carbomaq">
          <Logo />
        </PartnerLogo>
      </Partner>
      <Partner>
        <PartnerLogo to="/parceiro/carbomaq">
          <Logo />
        </PartnerLogo>
      </Partner>
    </PartnersBoxContent>
  );
}

const PartnersBoxContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  grid-gap: 1rem;

  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Partner = styled.div`
  width: 100%;
  aspect-ratio: 1;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PartnerLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  transition: ${({ theme }) => theme.transition.main};

  svg {
    width: 100%;
    fill: ${({ theme }) => theme.color.main.color};
  }
  &:hover {
    filter: grayscale(0%);
    cursor: pointer;
  }
`;

export default PartnersBox;
