import { useContext } from "react";
import { ReactComponent as BrasilSvg } from "../../../../../assets/flags/brasil.svg";
import { ReactComponent as UsaSvg } from "../../../../../assets/flags/usa.svg";
import { ReactComponent as SpainSvg } from "../../../../../assets/flags/spain.svg";

function Lenguage({ hide }) {
  return (
    <LenaguageContainer hide={hide}>
      <Icon as={BrasilSvg} selected />
      <Icon as={SpainSvg} />
      <Icon as={UsaSvg} />
    </LenaguageContainer>
  );
}
export default Lenguage;

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
  visibility: none;
  pointer-events: none;
  opacity: 0;
  ${({ hide }) =>
    hide &&
    `
 
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
