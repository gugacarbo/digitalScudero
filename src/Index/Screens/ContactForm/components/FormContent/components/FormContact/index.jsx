import { Formik } from "formik";
import { SubmitButton, StyledForm, Input, Select, TextArea } from "./Styled";
import { sendContact } from "../../../../../../util/api";
function FormContact() {
  return (
    <Formik
      initialValues={{ email: "", name: "", phone: "", type: "", message: "" }}
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
        if (!values.phone) {
          errors.phone = "Digite Seu Telefone";
        }
        if (!values.message) {
          errors.message = "Digite Sua Mensagem";
        }
        if (values.type == "") {
          errors.type = "Selecione";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus, resetForm, ...rest }) => {
        sendContact(values)
          .then((data) => {
            if (data.status == 200) {
              setStatus("success");
              setTimeout(() => resetForm(), 4000);
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
        status,
        touched,
      }) => (
        <StyledForm>
          <Input
            title="Nome"
            name="name"
            error={touched.name && errors.name}
            placeholder="Digite Seu Nome"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Input
            title="Telefone"
            name="phone"
            error={touched.phone && errors.phone}
            placeholder="Digite Seu Telefone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />

          <Input
            title="Email"
            type="email"
            name="email"
            error={touched.email && errors.email}
            placeholder={"Digite Seu Email"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Select
            title="Você é"
            type="type"
            name="type"
            error={errors.type}
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Pessoa Física">Pessoa Física</option>
            <option value="Pessoa Jurídica (Empresa)">
              Pessoa Jurídica (Empresa)
            </option>
          </Select>
          <TextArea
            title="Mensagem"
            name="message"
            error={touched.message && errors.message}
            placeholder="Digite Sua Mensagem"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          ></TextArea>
          <SubmitButton
            type="submit"
            onClick={handleSubmit}
            isSubmitting={isSubmitting ? 1 : 0}
            status={status}
          >
            {!isSubmitting && !status && "Enviar"}
            {isSubmitting && "Enviando"}
            {!isSubmitting &&
              status &&
              (status == "success" ? "Enviado" : "Erro")}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormContact;
