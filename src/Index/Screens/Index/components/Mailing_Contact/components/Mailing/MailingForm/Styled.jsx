import styled from "styled-components";
import { BaseButton, BaseInput } from "../../../../../../../Styled";
import { Field, ErrorMessage } from "formik";

export const Error = styled.div`
  margin: auto;
  grid-column: 1/2;
  grid-row: 3/4;
`;

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
      />
    </Label>
  );
}
export const LabelTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  b {
    font-size: 1.1rem;
    margin-left: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};
  }
  @media (max-width: 414px) {
    font-weight: 500;
    font-size: 1.3rem;
    b {
      font-size: 1.2rem;
    }
  }
`;

export const StyledInput = styled(BaseInput)`
  border: 2px solid ${({ theme }) => theme.color.white};
  font-size: 0.9rem;
  @media (max-width: 414px) {
    font-size: 1.1rem;
  }
  color: ${({ theme }) => theme.color.black};
  ${({ error, theme }) =>
    error &&
    `
    border: 2px solid ${theme.color.red};
  `}
`;

export const SubmitButton = styled(BaseButton)`
  width: 80%;
  font-weight: 600;
  margin: auto;
  font-size: 1rem;
  grid-column: 2/3;
  border: 2px solid ${({ theme }) => theme.color.white};

  @media (max-width: 520px) {
    width: 90%;
    padding: 0.2rem 0;
  }

  @media (max-width: 414px) {
    font-size: 1.4rem;
    padding: 0.4rem 0;
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.color.gray};
    pointer-events: none;
    cursor: not-allowed;
    color: ${theme.color.white};
    `}
`;

export const Label = styled.label`
  display: grid;
  width: 95%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto 0;
  grid-template-rows: auto;
  gap: 1rem;

  @media (max-width: 414px) {
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
  }
`;

export function CheckBoxBlog({ title, ...props }) {
  return (
    <BlogLabel>
      <Field
        {...props}
        type="checkbox"
        name={props.name}
        as={Field}
        htmlFor={props.htmlFor}
      />
      <BlogTitle>{title}</BlogTitle>
    </BlogLabel>
  );
}
const BlogTitle = styled.span`
  font-size: 1rem;
  @media (max-width: 414px) {
    font-size: 1.2rem;
  }
`;

const BlogLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
  font-weight: 500;
  input {
    accent-color: ${({ theme }) => theme.color.main.light};
  }
`;
