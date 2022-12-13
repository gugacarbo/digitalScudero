import styled from "styled-components";

export const TopMenuContainer = styled.div`
  position: fixed;
  top: 0;
  pointer-events: none;
  z-index: 50;
  width: 100vw;
  transition: ${({ theme }) => theme.transition.slow};
  ${({ scrolled }) =>
    scrolled &&
    `
      transform: translateY(0%);
    `}
`;

export const TopMenuContent = styled.div`
  width: 100%;
  pointer-events: none;
  * {
    pointer-events: all;
  }
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 5%;
  z-index: 55;
  @media (max-width: 620px) {
    padding: 2rem 5%;
  }
  @media (max-width: 414px) {
    padding: 1rem 5%;
  }
`;
