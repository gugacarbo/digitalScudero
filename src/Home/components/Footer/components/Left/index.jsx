import styled from "styled-components";
import Lenguage from "./Lenaguage";
import Menu from "./Menu";

function Left() {
  return (
    <FooterLeft>
      <Lenguage />
      <Menu />
    </FooterLeft>
  );
}

export default Left;

const FooterLeft = styled.div`
  grid-column: 2/3;
  display: grid;
  place-items: top left ;
  grid-template-columns: 100%;
  grid-template-rows: 20% 70% 10%;
`;
