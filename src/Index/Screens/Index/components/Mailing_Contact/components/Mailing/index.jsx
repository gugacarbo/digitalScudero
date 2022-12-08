import MailingForm from "./MailingForm";
import {
  MailingContainer,
  MailingTextContainer,
  MailingFormContainer,
  MailingTitle,
  MailingText,
} from "./Styled";

function Mailing() {
  return (
    <MailingContainer>
      <MailingTextContainer>
        <MailingTitle>Assine nossa Newsletter</MailingTitle>
        <MailingText>
          Assine nossa newsletter e receba com atecedência avisos promocionais,
          ofertas, ações, dicas de marketing e muito mais!
        </MailingText>
      </MailingTextContainer>
      <MailingFormContainer>
        <MailingForm />
      </MailingFormContainer>
    </MailingContainer>
  );
}

export default Mailing;
