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
  /* text-shadow: 0px 0 1px ${({ theme }) => theme.color.black},
    0px 0 2px ${({ theme }) => theme.color.black}; */
  color: #aaa;

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
  fill: ${({ theme }) => theme.color.white};
  fill: #aaa;
  overflow: visible;
  transition: ${({ theme }) => theme.transition.slow};
  position: relative;
  mix-blend-mode: difference;

  .ToggleTop,
  .ToggleMid,
  .ToggleBottom {
    position: relative;
    overflow: visible;
    pointer-events: none;
    mix-blend-mode: difference;
    * {
    }

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
