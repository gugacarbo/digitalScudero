import styled from "styled-components";

function Title() {
  return (
    <TitleContainer>
      <TitleH1>
        Como nós <b>Fazemos</b>?
      </TitleH1>
    </TitleContainer>
  );
}
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleH1 = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 0.1rem;
  font-weight: 500;
  text-align: center;

  b {
    font-size: 4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.main.color};
  }

  @media (max-width: 414px) {
    font-weight: 600;
    font-size: 5rem;
  }
`;

export default Title;
