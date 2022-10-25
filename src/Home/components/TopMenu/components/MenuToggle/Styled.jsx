import styled from "styled-components";
import { ReactComponent as MenuToggleSvg } from "../../../../../assets/menuToggle.svg";

export const MenuToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  &:hover span {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const MenuToggleText = styled.span`
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transition.slow};
  ${({ scrolled }) =>
    scrolled &&
    `
    opacity: 0;
    transform: translateX(100%);
   
    `}
`;

export const MenuTogglerIcon = styled(MenuToggleSvg)`
  width: 1.5rem;
  margin: auto 0;
  fill: #fff;
  overflow: visible;
  transition: ${({ theme }) => theme.transition.slow};
  position: relative;

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
