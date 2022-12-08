import styled from "styled-components";
import { ReactComponent as LeftArrowsSvg } from "../../../../../../../../assets/LeftArrows.svg";
import { ReactComponent as TextMarkersSvg } from "../../../../../../../../assets/TextMarkers.svg";

function Scroller() {
  return (
    <ScrollerContainer>
      <ScrollerButton>
        <LeftArrowsSvg />
      </ScrollerButton>
      <AvaliationBox>
        <AvaliationItem>
          <AvaliationImage>
            <img
              src="https://scontent.ffln13-1.fna.fbcdn.net/v/t39.30808-6/250685604_4811928245507137_4226467416076304143_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEX83V9cabrQk49k7usZPJu7F6PEfdgOMbsXo8R92A4xo0sQkQiNkjIt51RhofDS8T1D8rshhrXp8hqnLHPBj9w&_nc_ohc=xYdPblX-bqsAX-Z_vRU&_nc_ht=scontent.ffln13-1.fna&oh=00_AfDWXpJUWsKK6dtdzav_bpBZ58Q81o0sEX0lWzmAE1iFuQ&oe=63959FA3"
              alt=""
            />
          </AvaliationImage>
          <AvaliationName>Gustavo Carbonera</AvaliationName>
          <AvaliationOffice>
            Gestor Financeiro - Digital Scudero
          </AvaliationOffice>
          <AvaliationText>
            <TextMarkers />
            Velocidade e qualidade no trabalho, Suporte súper acessível e pau no
            cú do Bolsonaro!!!
            <TextMarkers right={1} />
          </AvaliationText>
          <AvaliationDate>Lages, 05/10/2022</AvaliationDate>
        </AvaliationItem>
      </AvaliationBox>
      <ScrollerButton right={1}>
        <LeftArrowsSvg />
      </ScrollerButton>
    </ScrollerContainer>
  );
}

const ScrollerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  aspect-ratio: 3.5;
`;

const ScrollerButton = styled.button`
  border: none;
  width: 100%;
  height: 80%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.color.main.color};
  border-bottom: 1px solid ${({ theme }) => theme.color.main.color};

  border-left: 1px solid ${({ theme }) => theme.color.main.color};
  margin: auto 0;
  svg {
    fill: ${({ theme }) => theme.color.main.color};

    width: 3rem;
  }
  ${({ theme, right }) =>
    right
      ? `
    border-right: 1px solid ${theme.color.main.color};
    border-left: none;
    
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
    svg{
        transform:rotate(180deg);
  
  }`
      : `
      
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
      `}
`;

const AvaliationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  border-radius: 1.5rem;
  color: #000;
  position: relative;
  overflow: hidden;
`;

const AvaliationItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.main.color};
  position: absolute;
`;

const AvaliationImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const AvaliationName = styled.span`
  color: ${({ theme }) => theme.color.main.light};
  font-weight: 500;
  font-size: 1.3rem;
`;
const AvaliationOffice = styled.span`
  color: ${({ theme }) => theme.color.mediumGray};
  font-weight: 400;
  font-size: 0.7rem;
  margin-top: -0.3rem;
`;

const AvaliationText = styled.p`
  color: ${({ theme }) => theme.color.mediumGray};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  width: 60%;
  margin: 1rem 0;
  position: relative;
`;

const TextMarkers = styled(TextMarkersSvg)`
  fill: ${({ theme }) => theme.color.mediumGray};
  width: 1.7rem;
  position: absolute;
  top: -0.5rem;
  left: -1.3rem;
  ${({ theme, right }) =>
    right &&
    `
    transform: scaleX(-1);
    left: initial;
    right: -1.3rem;
    `}
`;

const AvaliationDate = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  position: relative;
  margin-top: 1rem;
`;

export default Scroller;
