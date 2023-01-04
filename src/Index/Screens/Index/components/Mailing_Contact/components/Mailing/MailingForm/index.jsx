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
        if (values.name.length > 50) {
          errors.name = "Máximo 50 Caracteres";
        }
        if (values.email.length > 100) {
          errors.email = "Máximo 100 Caracteres";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus, resetForm, ...rest }) => {
        registerNewsletter(values)
          .then(({ data }) => {
            console.log(data);
            if (data.status == 200) {
              resetForm();
              setStatus("success");
            } else {
              alert(data.message);
              setStatus("error");
            }
          })
          .catch((err) => {
            setStatus("error");
          })
          .finally(() => {
            setSubmitting(false);
            setTimeout(() => setStatus(null), 3000);
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
            maxLength={50}
            value={values.name}
          />

          <Input
            title="Email"
            type="email"
            name="email"
            maxLength={100}
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
