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

import { registerNewsletter } from "../../../../../../../util/api";

function MailingForm() {
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
          errors.email = "Email Invalido";
        }
        if (!values.name) {
          errors.name = "Digite Seu Nome";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus, resetForm, ...rest }) => {
        registerNewsletter(values)
          .then((data) => {
            if (data.status == 200) {
              resetForm();
              setStatus("success");
            } else {
              setStatus("error");
            }
          })
          .catch((err) => {
            setStatus("error");
          })
          .finally(() => {
            setSubmitting(false);
            setTimeout(() => setStatus(null), 4000);
          });
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
        status,
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
            disabled={
              isSubmitting ||
              (errors.email && touched.email) ||
              (errors.name && touched.name) ||
              status == "error" ||
              0
            }
            onClick={handleSubmit}
            isSubmitting={isSubmitting ? 1 : 0}
            status={status}
          >
            {!isSubmitting && !status && "Assinar Newsletter"}
            {isSubmitting && "Enviando"}
            {status && (status == "success" ? "Cadastrado!" : "Erro")}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default MailingForm;
