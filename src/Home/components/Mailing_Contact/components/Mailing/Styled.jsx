import styled from "styled-components";

export const MailingContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 10% 35% 45% 10%;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.color.main.color};
`;

export const MailingTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #333; */
  grid-column: 2/3;
`;

export const MailingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
`;

export const MailingText = styled.p`
  font-size: 1.1rem;
  margin-right: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
  margin-top: 2rem;
`;

export const MailingFormContainer = styled.div`
  /* background-color: #33f; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 3/4;
`;
