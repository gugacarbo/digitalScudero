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
    <Label style={{ gridColumn: "1/3" }}>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 0rem;
    height: 3rem;
    transform: scale(0.3);
    overflow: visible;
    background-color: transparent;
    z-index: -1;

    background-color: transparent;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"},
          0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"};
      }
      40% {
        box-shadow: 0 0 0 10rem ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 0 ${({ theme }) => theme.color.main.color + "a0"};
      }
      80% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 30rem ${({ theme }) => theme.color.main.color + "00"};
      }
      100% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.color + "00"},
          0 0 0 30rem ${({ theme }) => theme.color.main.color + "00"};
      }
    }

    @keyframes animationSuccess {
      0% {
        /* box-shadow: 0 0 0 0 ${({ theme }) => theme.color.main.light + "a0"},
          0 0 0 0 ${({ theme }) => theme.color.main.light + "a0"}; */
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.green},
          0 0 0 0 ${({ theme }) => theme.color.green};
      }

      50% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
      100% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
    }
    @keyframes animationError {
      0% {
        box-shadow: 0 0 0 0 ${({ theme }) => theme.color.red},
          0 0 0 0 ${({ theme }) => theme.color.red};
      }

      50% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
      100% {
        box-shadow: 0 0 0 20rem #00000000, 0 0 0 40rem #00000000;
      }
    }
  }

  ${({ status, theme, isSubmitting }) => {
    if (!isSubmitting) {
      switch (status) {
        case "success":
          return `
          border-color: ${theme.color.green};
          color: ${theme.color.white};
          &::after {
            background-color: ${theme.color.green};
            animation: animationSuccess 2s forwards;
          }
          `;
        case "error":
          return `
          color: ${theme.color.white};
          border-color: ${theme.color.red};
          &::after {
              background-color: ${theme.color.red};
            animation: animationError 2s forwards;

            }
          `;
      }
    } else {
      return `
        pointer-events: none;
        border-color: ${theme.color.main.dark};
        color: ${theme.color.darkGray};
        &::after {
          animation: pulse 2s infinite;
        }
        `;
    }
  }}
`;

const Label = styled.label`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto 0;
  grid-template-rows: auto;
  gap: 1.5rem;
`;
