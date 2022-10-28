import { useParams } from "react-router-dom";

function ContactForm() {
  const { contact } = useParams();
  return <div>{contact}</div>;
}

export default ContactForm;
