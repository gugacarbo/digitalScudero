import styled from "styled-components";
import CaseItem from "../CaseItem";
import CarbomaqSquareImg from "../../../../../../assets/carbomaq.png";
import { ReactComponent as CarbomaqLogo } from "../../../../../../assets/Logo.svg";

function CasesBox() {
  return (
    <BoxContent>
      <CaseItem
        to="carbomaq-website"
        title="Desenvolvimento de Website"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Identidade Visual"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Criação de Arte Para  Postagens"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Manual de Identidade de Marca"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Desenvolvimento de Website"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Identidade Visual"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Criação de Arte Para  Postagens"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
      <CaseItem
        to="carbomaq-website"
        title="Manual de Identidade de Marca"
        img={CarbomaqSquareImg}
        logo={CarbomaqLogo}
      ></CaseItem>
    </BoxContent>
  );
}

export default CasesBox;

const BoxContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  place-items: center;
  gap: 0.1rem;
`;