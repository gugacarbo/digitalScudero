import { useEffect } from "react";
import styled from "styled-components";

function ShowPartner({ partnerCases }) {
  return (
    <Content>
      {partnerCases.map((value, index, array) => (
        <Item
          key={index + index + "2a"}
          bg={value.background}
          target="blank"
          href={value.to}
        >
          <ItemName hide={!value.to ? 1 : 0}>{value.title}</ItemName>
        </Item>
      ))}
    </Content>
  );
}

const ItemName = styled.span`
  z-index: 1;
  position: relative;
  color: ${({ theme }) => theme.color.main.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  max-width: 90%;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  transition: ${({ theme }) => theme.transition.x2};
  transform: translateY(-150%);
  margin-top: auto;
  &::after {
    content: "";
    width: 90%;
    position: absolute;
    bottom: -0.3rem;
    transition: ${({ theme }) => theme.transition.x2};

    height: 0.1rem;
    background-color: ${({ theme }) => theme.color.main.color};
  }
  @media (max-width: 520px) {
    font-size: 2rem;
  }
  ${({ hide }) => hide && `display:none;`}
`;

const Item = styled.a`
  aspect-ratio: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  background-image: url(${({ bg }) => bg});
  background-size: auto 110%;
  background-position: center;
  background-repeat: no-repeat;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  transition: ${({ theme }) => theme.transition.x2};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    transition: ${({ theme }) => theme.transition.main};

    background-image: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.background}00,
       ${theme.background}aa,
        ${theme.background}cc,
         ${theme.background})`};
  }
  filter: grayscale(50%) opacity(0.8);

  @media (max-width: 768px) {
    width: 45%;
    filter: none;
  }
  @media (max-width: 520px) {
  }
  @media (max-width: 414px) {
    width: 90%;
    &::after {
      content: "";
      background-image: ${({ theme }) =>
        `linear-gradient(to bottom, ${theme.color.main.color}00,
       ${theme.background}88,
        ${theme.background}dd,
         ${theme.background})`};
    }
  }

  &:hover {
    filter: grayscale(0%);
    &::after {
      opacity: 0.1;
    }
    & ${ItemName} {
      color: ${({ theme }) => theme.color.white};
      transform: scale(1.1) translateY(-200%);
      &::after {
        width: 99%;
        background-color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;

const Content = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    width: 85%;
  }
  @media (max-width: 414px) {
    flex-direction: column;
    width: 90%;
    gap: 5rem;
  }
`;

export default ShowPartner;
