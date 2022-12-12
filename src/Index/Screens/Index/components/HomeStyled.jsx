import styled from "styled-components";

export const BaseTitle = styled.h1`
  font-size: 3.9rem;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.1rem;
  font-weight: 600;
  max-width: 95%;
  text-align: center;
  line-height: 1em;
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
  @media (max-width: 520px) {
    width: 90%;
  }
`;
