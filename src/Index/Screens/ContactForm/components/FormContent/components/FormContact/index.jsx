import { Formik } from "formik";
import { sendContact } from "../../../../../../util/api";
import InputMask from "react-input-mask";

function FormContact({ contactType }) {
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
        if (values.phone.length < 16) {
          errors.phone = "Telefone Inválido";
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
        sendContact({
          ...values,
          contactType,
          clientType: values.type,
          type: undefined,
        })
          .then(({ data }) => {
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
            setTimeout(() => setStatus(null), 2500);
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
            as={InputMask}
            mask="(99) 9.9999-9999"
            maskChar=""
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

import styled from "styled-components";
import { BaseButton, BaseInput } from "../../../../../../Styled";
import { Field, ErrorMessage } from "formik";

export function Input({ children, title, error, ...props }) {
  return (
    <Label>
      <LabelTitle>
        {title} <b>{error && error}</b>
      </LabelTitle>
      <StyledInput
        as={Field}
        error={error}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        {...props}
      />
    </Label>
  );
}
export function Select({ children, title, error, ...props }) {
  return (
    <Label>
      <LabelTitle>
        {title} <b>{error && error}</b>
      </LabelTitle>
      <StyledSelect
        as="select"
        type={props.type}
        name={props.name}
        error={error ? 1 : 0}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      >
        <option value="">Selecione</option>

        {children}
      </StyledSelect>
    </Label>
  );
}
export function TextArea({ children, title, error, ...props }) {
  return (
    <Label textarea={1}>
      <LabelTitle>
        {title} <b>{error && error}</b>
      </LabelTitle>
      <StyledTextArea
        as="textarea"
        error={error}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      >
        {children}
      </StyledTextArea>
    </Label>
  );
}

const Error = styled.div`
  margin: auto;
  grid-column: 1/2;
  grid-row: 3/4;
`;

const LabelTitle = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.main.color};

  b {
    font-size: 0.9rem;
    margin-left: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.main.dark};
  }
`;

const StyledInput = styled(Field)`
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  transition: ${({ theme }) => theme.transition.main};
  border-bottom: 2px solid ${({ theme }) => theme.color.white};
  outline: none;

  ${({ error, theme }) =>
    error &&
    `
    border-bottom: 2px solid ${theme.color.main.dark};
  `}

  &:focus {
    border-color: ${({ theme }) => theme.color.main.dark};
  }
`;

const StyledSelect = styled(StyledInput)`
  option {
    color: ${({ theme }) => theme.color.black};
  }
`;
const StyledTextArea = styled(StyledInput)`
  min-height: 8rem;
  resize: none;
  width: 100%;
  @media (max-width: 414px) {
    min-height: 3rem;
  }
`;

export const SubmitButton = styled(BaseButton)`
  width: 50%;
  font-weight: 600;
  margin: 0;
  margin-left: auto;
  grid-column: 2/3;
  font-size: 1rem;
  border-color: ${({ theme }) => theme.color.main.color};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;

  ${({ textarea }) =>
    textarea &&
    `
   grid-column: 1/3;
   @media (max-width: 414px) {
     grid-column: auto;
  }
  `}
`;

export const StyledForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: auto 0;
  grid-template-rows: auto;
  gap: 1.5rem;
  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 414px) {
    height: 100%;
    flex: 1;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
  }
`;
