import styled from "styled-components";


export const Button = styled.button`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary};
  transition: all 100ms linear;
  background-color: ${p => p.theme.colors.white};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`
