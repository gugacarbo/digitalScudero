import styled from "styled-components";
import { ReactComponent as MenuToggleSvg } from "../../../../../assets/menuToggle.svg";

export const MenuToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 0.5rem;
  margin-left: 2rem;
  z-index: 55;

  cursor: pointer;
  &:hover span {
    opacity: 1;
    transform: translateX(0%);
  }
  @media (max-width: 620px) {
    margin-left: 1rem;
  }
`;

export const MenuToggleText = styled.span`
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transition.slow};
  color: #aaa;
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  ${({ scrolled }) =>
    scrolled &&
    `
    opacity: 0;
    transform: translateX(100%);
   
    `}
`;

export const MenuTogglerIcon = styled(MenuToggleSvg)`
  width: 1.8rem;
  margin: auto 0;
  fill: ${({ theme }) => theme.color.mediumGray};
  overflow: visible;
  transition: ${({ theme }) => theme.transition.slow};
  position: relative;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    width: 2.25rem;
  }

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
