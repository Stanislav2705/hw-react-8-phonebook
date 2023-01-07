import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.semibold};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary};
  color: white;
`;

export const Error = styled(Message)`
  background-color: ${p => p.theme.colors.error};
`;
