import styled from "styled-components";

function Title() {
  return (
    <TitleH1>
      Quem é a{" "}
      <b>
        Digital <i>Scudero</i>
      </b>
      ?
    </TitleH1>
  );
}
const TitleH1 = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 500;
  max-width: 95%;

  text-align: center;
  b {
    font-size: 3.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.main.color};
  }
  i {
    font-size: 4rem;

    font-style: normal;
    font-family: "BDPBIRGULA";
  }
  @media (max-width: 414px) {
    font-size: 5rem;
  }
  
`;

export default Title;
