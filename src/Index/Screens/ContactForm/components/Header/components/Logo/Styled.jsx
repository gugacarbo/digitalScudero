import { ReactComponent as LogoSvg } from "../../../../../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoIcon = styled(LogoSvg)`
width: 100px;
fill: ${({ theme }) => theme.color.white};
margin-right: auto;
transition: ${({ theme }) => theme.transition.slow};
`;

export const LogoContainer = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
text-decoration: none;
margin-right: auto;

&:hover ${LogoIcon} {
  filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.color.main.color});
}
`;

export const LogoText = styled.h1`
position: relative;
transition: ${({ theme }) => theme.transition.x3};
font-family: BDPBIRGULA, Poppins;
display: flex;
color: ${({ theme }) => theme.color.white};
align-items: center;
justify-content: center;
font-size: 1.3rem;
font-weight: 300;

text-shadow: 0px 0 1px ${({ theme }) => theme.color.darkGray},
  0px 0 2px ${({ theme }) => theme.color.mediumGray};
`;

export const Digital = styled.span`
font-size: 0.4em;
font-family: "Gothan";
left: 0.4em;
top: -0.3em;
position: absolute;
`;

