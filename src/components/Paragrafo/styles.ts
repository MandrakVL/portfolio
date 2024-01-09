import styled from 'styled-components'

import { Props } from '.'

export const P = styled.h3<Props>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
