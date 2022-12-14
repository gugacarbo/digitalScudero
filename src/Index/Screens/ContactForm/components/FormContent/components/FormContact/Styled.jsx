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
  color: ${({ theme }) => theme.color.main.color};
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
