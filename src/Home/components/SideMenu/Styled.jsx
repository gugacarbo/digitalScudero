import Div100vh from "react-div-100vh";
import styled from "styled-components";

export const SideMenuContainer = styled(Div100vh)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.black};
  padding: 2rem;
  width: 40vh;
  transition: ${({ theme }) => theme.transition.x2};
  ${({ open }) =>
    !open &&
    `
      transform: translateX(100%);  
    `}

  display: flex;
  flex-direction: column;
`;
