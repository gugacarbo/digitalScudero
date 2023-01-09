import { ReactComponent as LeftArrowsSvg } from "../../../../../../assets/LeftArrows.svg";

import { BackLink, Dots } from "../../../../PatternPageStyled";

function BackButton() {
  return (
    <>
      <BackLink to={-1 ?? "/"}>
        <LeftArrowsSvg />
        <span>Home</span>
      </BackLink>

      <Dots />
    </>
  );
}

export default BackButton;
