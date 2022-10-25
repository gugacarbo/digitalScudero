import Div100vh from "react-div-100vh";
import styled from "styled-components";

export const SideMenuContainer = styled(Div100vh)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 10px;
  background-color: #000;

  ${({ open }) =>
    !open &&
    `
    transform: translateX(100%);
    
    `}
`;
