import { Icon } from "./Styled";

function SocialIcon({ icon, ...props }) {
  return (
    <Icon  target={"_blank"} {...props}>
      {icon}
    </Icon>
  );
}

export default SocialIcon;
