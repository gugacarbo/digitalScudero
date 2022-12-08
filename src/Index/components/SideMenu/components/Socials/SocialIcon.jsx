import { Icon } from "./Styled";

function SocialIcon({ icon, color }) {
  return (
    <Icon href="https://www.facebook.com/" target={"_blank"} color={color}>
      {icon}
    </Icon>
  );
}

export default SocialIcon;
