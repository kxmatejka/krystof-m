import React from 'react'
import styled from 'styled-components'
import {Button} from './button'
import {GITHUB_ICON} from '../icons'
import {SvgBase64Img} from '../svg-base64-img'

const StyledButton = styled(Button)`
  width: 80px;
`

const Icon = () => {
  return (
    <SvgBase64Img src={GITHUB_ICON} alt='GitHub' width='26'/>
  )
}

export const GitHubButton = () => {
  return <StyledButton><Icon/>&nbsp;Issues</StyledButton>
}
