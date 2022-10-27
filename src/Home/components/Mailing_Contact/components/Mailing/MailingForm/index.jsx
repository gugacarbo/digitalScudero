import { Formik } from "formik";
import {
  Error,
  LabelTitle,
  StyledInput,
  SubmitButton,
  Label,
  StyledForm,
  Input,
  CheckBoxBlog,
} from "./Styled";

function MailingForm() {
  function t(val) {
    return val;
  }
  return (
    <Formik
      initialValues={{ email: "", name: "", blog: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Digite Seu Email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("Root.Contact.NewsLetter.Form.Error.Mail");
          errors.email = "Email Invalido";
        }
        if (!values.name) {
          errors.name = t("Root.Contact.NewsLetter.Form.Error.NoName");
          errors.name = "Digite Seu Nome";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, ...rest }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
      }) => (
        <StyledForm>
          <Input
            title="Nome"
            htmlFor="name"
            name="name"
            error={errors.name}
            placeholder="Digite Seu Nome"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          <Input
            title="Email"
            type="email"
            name="email"
            error={errors.email}
            placeholder={"Digite Seu Email"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <CheckBoxBlog
            title="Receber as novidades do blog"
            type="checkbox"
            name="blog"
          />

          <SubmitButton
            type="submit"
            error={errors.email || errors.name || 0}
            onClick={handleSubmit}
            disabled={
              isSubmitting ||
              (errors.email && touched.email) ||
              (errors.name && touched.name) ||
              0
            }
          >
            Assinar Newsletter
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default MailingForm;
