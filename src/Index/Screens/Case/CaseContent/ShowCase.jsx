import { useEffect } from "react";
import styled from "styled-components";

function ShowCase({ img, alt }) {
  return (
    <Content>
      <img src={img} alt={alt} />
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 15rem;
  position: relative;
  display: flex;
  img {
    width: 100%;
  }
  &::after,
  &::before {
    content: "";

    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    height: 20%;
    ${({ theme }) => `
    background-image: linear-gradient(to bottom, ${theme.background}, ${theme.background}05);
    `}
  }
  &::before {
    top: inherit;
    bottom: 15rem;
    height: 40%;
    ${({ theme }) => `
    background-image: linear-gradient(to top, ${theme.background}, ${theme.background}05);
    `}
  }
`;

export default ShowCase;
