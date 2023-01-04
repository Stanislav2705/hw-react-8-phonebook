import styled from "styled-components";

export const Message = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
`;

export const Error = styled(Message)`
    background-color: #ff0000;
`
