import styled from 'styled-components';

import { InputProps } from './types';

const InputStyled = styled.input<InputProps>`
  padding: 4px;
  font-size: 16px;
  width: 100%;
  max-width: 100%;
`;

export { InputStyled };