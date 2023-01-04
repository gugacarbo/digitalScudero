import styled from "styled-components";
import { ReactComponent as DotsSvg } from "../../../../assets/services/ServiceDots.svg";

export const BaseTitle = styled.h2`
  font-size: 3.9rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.1rem;
  font-weight: 600;
  max-width: 95%;
  text-align: center;
  line-height: 0.9em;
  b {
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.color.main.color};
  }

  i {
    font-size: 1.05em;
    font-style: normal;
    font-family: "BDPBIRGULA";
  }
  @media (max-width: 414px) {
    font-size: 5rem;
  }
`;

export const BaseText = styled.p`
  color: ${({ theme }) => theme.color.black};

  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  width: 80%;
  margin: 1rem 0;
  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.9;
  margin: 0.5rem 0;
  margin: 1rem 0;
  @media (max-width: 768px) {
    width: 45%;
    margin: 0.7rem 0;
  }
  @media (max-width: 414px) {
    margin: 0.5rem 0;
    width: 65%;
    opacity: 1;
  }
  @media (max-width: 350px) {
  }
`;
