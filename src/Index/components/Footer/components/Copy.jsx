import styled from "styled-components";

function Copy() {
  return (
    <CopyRight>
      <CopyText>
        Copyright © 2022 -{" "}
        <CopyLink>
          Digital <b>scudero</b>
        </CopyLink>{" "}
        Todos os direitos reservados
      </CopyText>
    </CopyRight>
  );
}

const CopyRight = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  grid-column: 1/7;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyText = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.75rem;
  font-weight: 200;
  text-align: center;
`;

const CopyLink = styled.a`
  color: ${({ theme }) => theme.color.main.color};
  font-size: 0.85rem;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 500;
  cursor: pointer;
  b {
    font-weight: 300;
    font-family: "BDPBIRGULA";
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Copy;
