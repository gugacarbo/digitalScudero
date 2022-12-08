import styled from "styled-components";

export const TopMenuContainer = styled.div`
  position: fixed;
  top: 0;
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
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  padding-top: 1rem;
  z-index: 55;

`;

