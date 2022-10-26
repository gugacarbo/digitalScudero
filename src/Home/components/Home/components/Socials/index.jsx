import { SocialsContainer, Dots, IconsBox } from "./Styled";
import SocialIcon from "./SocialIcon";
import { ReactComponent as FacebookIcon } from "../../../../../assets/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../../assets/socials/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../../../assets/socials/linkedin.svg";
import { ReactComponent as BehanceIcon } from "../../../../../assets/socials/behance.svg";
import { ReactComponent as PinterestIcon } from "../../../../../assets/socials/pinterest.svg";

function Socials() {
  return (
    <SocialsContainer>
      <Dots rotate={1} />
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
        color={"#1769ff"}
        icon={<BehanceIcon />}
        href="https://www.behance.net/"
      />
      <SocialIcon
        color={"#e60023"}
        icon={<PinterestIcon />}
        href="https://www.pinterest.com/"
      />
      </IconsBox>

      <Dots />
    </SocialsContainer>
  );
}

export default Socials;
