import styled from 'styled-components';
import {
  color,
  space,
  layout,
  border,
  shadow,
  typography,
  flexbox,
  grid,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  border,
  shadow,
  typography,
  flexbox,
  grid
);

export default Box;
