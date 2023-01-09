import { SocialsContainer } from "./Styled";
import SocialIcon from "./SocialIcon";
import { ReactComponent as FacebookIcon } from "../../../../../../assets/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../../../assets/socials/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../../../../assets/socials/linkedin.svg";
import { ReactComponent as PinterestIcon } from "../../../../../../assets/socials/pinterest.svg";

function Socials() {
  return (
    <SocialsContainer>
      <SocialIcon
        color={"#e4405f"}
        icon={<InstagramIcon />}
        href={import.meta.env.VITE_DS_INSTAGRAM_URL}
      />
      <SocialIcon
        color={"#3b5998"}
        icon={<FacebookIcon />}
        href={import.meta.env.VITE_DS_FACEBOOK_URL}
      />

      <SocialIcon
        color={"#0077b5"}
        icon={<LinkedinIcon />}
        href={import.meta.env.VITE_DS_LINKEDIN_URL}
      />
      <SocialIcon
        color={"#e60023"}
        icon={<PinterestIcon />}
        href={import.meta.env.VITE_DS_PINTEREST_URL}
      />
    </SocialsContainer>
  );
}

export default Socials;
