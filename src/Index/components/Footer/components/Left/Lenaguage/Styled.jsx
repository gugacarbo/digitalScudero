import styled from "styled-components";

export const LenaguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-right: auto;

  @media screen and (max-width: 520px) {
    gap: 1.2rem;
  }
`;

export const Icon = styled.div`
  height: 1.2rem;
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
  @media screen and (max-width: 520px) {
    height: 1.6rem;
  }
`;
