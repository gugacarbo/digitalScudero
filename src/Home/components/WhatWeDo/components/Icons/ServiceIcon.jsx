import styled from "styled-components";
import Icon from "./";

function ServiceIcon({ icon }) {
  return (
    <SIcon>
      <Icon icon={icon} />
    </SIcon>
  );
}

const SIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceText = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.main.color};
`

export default ServiceIcon;
