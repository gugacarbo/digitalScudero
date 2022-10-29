import styled from "styled-components";

export const LenaguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 0 2rem;
  ${({ hide }) =>
    hide &&
    `
    display: none;  
    `}
`;

export const Icon = styled.div`
  height: 1rem;
  cursor: pointer;
  filter: grayscale(80%);
  transition: ${({ theme }) => theme.transition.main};
  ${({ selected }) =>
    selected &&
    `
    filter: grayscale(0%);
  `}
  &:hover {
    filter: grayscale(0%);
  }
`;
