import styled from "styled-components";

function Copy() {
  return (
    <CopyRight>
      <CopyText>
        Copyright © 2023 -{" "}
        <CopyLink href={`mailto:${import.meta.env.VITE_DS_EMAIL}`}>
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
  color: ${({ theme }) => theme.color.white}aa;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 520px) {
    font-size: 1rem;
  }
`;

const CopyLink = styled.a`
  color: ${({ theme }) => theme.color.main.color};
  font-size: 0.9em;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 600;
  cursor: pointer;
  b {
    font-size: 1.3em;
    font-weight: 300;
    font-family: "BDPBIRGULA";
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Copy;
