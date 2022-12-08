import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import carbomaqCaseBg from "../../../../assets/carbomaqCaseBg.jpg";

function ShowPartner() {
  useEffect(() => {
    //window.scrollTo(0, 0);
  }, []);

  return (
    <Content>
      <Item bg={carbomaqCaseBg}>
        <ItemName>Visite o Website</ItemName>
      </Item>
      <Item bg={carbomaqCaseBg}>
        <ItemName>Veja a prévia da ID Visual</ItemName>
      </Item>
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
  text-align: center;
  transition: ${({ theme }) => theme.transition.x2};
  transform: translateY(100%);
  &::after {
    content: "";
    width: 90%;
    position: absolute;
    bottom: -0.3rem;
    transition: ${({ theme }) => theme.transition.x2};

    height: 0.1rem;
    background-color: ${({ theme }) => theme.color.main.color};
  }
`;

const Item = styled(Link)`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-image: url(${({ bg }) => bg});
  background-size: auto 110%;
  background-position: center;
  background-repeat: no-repeat;
  text-decoration: none;
  position: relative;
  transition: ${({ theme }) => theme.transition.x2};

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    background-image: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.background}00, ${theme.background}aa, ${theme.background}, ${theme.background})`};
  }

  filter: grayscale(50%) opacity(0.8);

  &:hover {
    filter: grayscale(0%);
    & ${ItemName} {
      color: ${({ theme }) => theme.color.white};
      transform: scale(1.1) translateY(100%);
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
`;

export default ShowPartner;
