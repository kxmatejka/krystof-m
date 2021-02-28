import React, {FC} from 'react'
import styled from 'styled-components'
import {Separator} from './separater'

const StyledHeading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 3rem;
  padding: 0;
  margin: 20px 0 0 0;
`

const StyledSeparator = styled(Separator)`
  margin-bottom: 30px;
`

interface Props {
  text: string
}

export const Header: FC<Props> = ({text}) => {
  return (
    <>
      <StyledHeading>{text}</StyledHeading>
      <StyledSeparator/>
    </>
  )
}
