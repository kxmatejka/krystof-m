import React, {FC} from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  color: #eee;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 3rem;
`

interface Props {
  text: string
}

export const Header: FC<Props> = ({text}) => <StyledHeading>{text}</StyledHeading>
