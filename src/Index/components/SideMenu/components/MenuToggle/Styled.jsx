import styled from "styled-components";
import { ReactComponent as MenuToggleSvg } from "../../../../../assets/menuToggle.svg";

export const MenuToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  gap: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  &:hover span {
    opacity: 1;
    transform: translateX(0%);
  }

`;

export const MenuTogglerIcon = styled(MenuToggleSvg)`
  width: 2.1rem;
  margin: auto 0;
  fill: ${({ theme }) => theme.color.white};
  overflow: visible;
  transition: ${({ theme }) => theme.transition.slow};
  position: relative;

  @media (max-width: 768px) {
    width: 3rem;
  }

  .ToggleTop,
  .ToggleMid,
  .ToggleBottom {
    position: relative;
    overflow: visible;
    transition: ${({ theme }) => theme.transition.slow};
  }
  .ToggleTop {
    transform-origin: 100% top;
  }
  .ToggleBottom {
    transform-origin: 100% bottom;
  }
  
  ${({ open }) =>
    open &&
    `
    transform: translate(-10%, 0);
  
    .ToggleTop {
    transform:  rotate(-45deg);

  }
  .ToggleMid {
    filter: opacity(0);
  }
  .ToggleBottom {
    transform: translate(-10%, 10%)  rotate(45deg) ;
  }
  `}
`;
