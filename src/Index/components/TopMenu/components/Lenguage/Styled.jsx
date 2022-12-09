import styled from "styled-components";

export const LenaguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 0 2rem;

  @media (max-width: 620px) {
    margin: 0 1rem;
  }
  @media (max-width: 520px) {
    margin: 0 0.5rem;
    display: none;
  }
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

  @media (max-width: 768px) {
    height: 1.2rem;
  }
`;
