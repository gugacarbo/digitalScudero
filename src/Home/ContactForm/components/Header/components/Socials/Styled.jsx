import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as ShareIconSvg } from "../../../../../../assets/ShareIcon.svg";

export const ShareIcon = styled(ShareIconSvg)`
  width: 2rem;
  * {
    fill: ${({ theme }) => theme.color.main.color};
    fill: ${({ theme }) => theme.color.white};
  }
  transition: ${({ theme }) => theme.transition.slow};
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.color.main.color});
  }
  ${({ ListOpen, theme }) =>
    ListOpen &&
    `
  filter: drop-shadow(0px 0px 5px ${theme.color.main.color});
`}
`;

export const ShareBox = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
`;

export const IconstList = styled(motion.div)`
  position: absolute;
  top: 200%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const IconItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};

  svg {
    width: 1.4rem;
    height: 1.4rem;

    * {
      transition: ${({ theme }) => theme.transition.main};
      fill: ${({ theme }) => theme.color.white};
    }
  }

  &:hover {
    * {
      fill: ${({ color }) => color};
    }
  }
`;
