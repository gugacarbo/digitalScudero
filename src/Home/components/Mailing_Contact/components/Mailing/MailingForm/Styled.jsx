import styled from "styled-components";
import { BaseButton, BaseInput } from "../../../../../Styled";
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
  b {
    font-size: 0.9rem;
    margin-left: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.main.complement};
  }
`;

export const StyledInput = styled(BaseInput)`
  border: 2px solid ${({ theme }) => theme.color.white};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.black};
  ${({ error, theme }) =>
    error &&
    `
    border: 2px solid ${theme.color.main.complement};
  `}
`;

export const SubmitButton = styled(BaseButton)`
  width: 80%;
  font-weight: 600;
  margin: auto;
  font-size: 1rem;
  grid-column: 2/3;
  border-color: ${({ theme }) => theme.color.white};
  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.color.lightGray};
    pointer-events: none;
    cursor: not-allowed;
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
`;

export function CheckBoxBlog({ title, ...props }) {
  return (
    <BlogLabel>
      <Field
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
`;

const BlogLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
`;
