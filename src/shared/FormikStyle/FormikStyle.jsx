import { Field, Form } from "formik";
import { Button } from "shared/Button/Button.styles";
import styled from "styled-components";


export const FormStyled = styled(Form)`
  width: 320px;
  margin: 0 auto;
`
export const StyledButton = styled(Button)`
   width: 100%;
   margin-top: ${p => p.theme.space[4]}px;
`

export const Input = styled(Field)`
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  padding: ${p => p.theme.space[2]}px 4px;
  margin-top: 6px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
`
