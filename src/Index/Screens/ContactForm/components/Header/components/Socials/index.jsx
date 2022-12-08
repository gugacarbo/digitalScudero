import { ShareIcon, ShareBox, IconstList, IconItem } from "./Styled";
import { ReactComponent as Facebook } from "../../../../../../../assets/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../../../../../../assets/socials/instagram.svg";
import { ReactComponent as Linkedin } from "../../../../../../../assets/socials/linkedin.svg";
import { ReactComponent as Behance } from "../../../../../../../assets/socials/behance.svg";
import { ReactComponent as Pinterest } from "../../../../../../../assets/socials/pinterest.svg";
import { useState } from "react";

function Socials() {
  const [IconsListOpen, setIconsListOpen] = useState(false);
  const IconsListAnimation = {
    open: {
      height: "auto",
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <ShareBox>
      <ShareIcon
        onClick={() => setIconsListOpen(!IconsListOpen)}
        listopen={IconsListOpen ? 1 : 0}
      />
      <IconstList
        variants={IconsListAnimation}
        initial="closed"
        animate={IconsListOpen ? "open" : "closed"}
      >
        <IconItem color={"#e4405f"}>
          <Instagram />
        </IconItem>
        <IconItem color={"#3b5998"}>
          <Facebook />
        </IconItem>
        <IconItem color={"#0077b5"}>
          <Linkedin />
        </IconItem>
        <IconItem color={"#1769ff"}>
          <Behance />
        </IconItem>
        <IconItem color={"#e60023"}>
          <Pinterest />
        </IconItem>
      </IconstList>
    </ShareBox>
  );
}

export default Socials;
