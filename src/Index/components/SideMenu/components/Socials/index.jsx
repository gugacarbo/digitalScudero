import SocialIcon from "./SocialIcon";
import BlogButton from "../BlogButton";
import { ReactComponent as FacebookIcon } from "../../../../../assets/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../../assets/socials/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../../../assets/socials/linkedin.svg";
import { ReactComponent as BehanceIcon } from "../../../../../assets/socials/behance.svg";
import { ReactComponent as PinterestIcon } from "../../../../../assets/socials/pinterest.svg";

function Socials() {
  return (
    <SocialsContainer>
      <SocialsTitle>ACESSE NOSSAS REDES SOCIAIS</SocialsTitle>
      <IconsBox>
        <SocialIcon
          color={"#e4405f"}
          icon={<InstagramIcon />}
          href="https://www.instagram.com/"
        />
        <SocialIcon
          color={"#3b5998"}
          icon={<FacebookIcon />}
          href="https://www.facebook.com/"
        />

        <SocialIcon
          color={"#0077b5"}
          icon={<LinkedinIcon />}
          href="https://www.linkedin.com/"
        />

        <SocialIcon
          color={"#e60023"}
          icon={<PinterestIcon />}
          href="https://www.pinterest.com/"
        />
      </IconsBox>
      <BlogButton />
    </SocialsContainer>
  );
}
export default Socials;

import styled from "styled-components";

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-top: 3rem;
  width: 90%;
  margin-top: auto;
  margin-bottom: 10%;
  @media (max-width: 520px) {
    width: 60%;
  }
  @media (max-width: 520px) {
  }
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const SocialsTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  letter-spacing: 0.03rem;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
