import React from 'react'
import styled from 'styled-components'
import {Button} from './button'
import {TWITTER_ICON} from '../icons'
import {SvgBase64Img} from '../svg-base64-img'

const StyledButton =styled(Button)`
  width: 85px;
`

const Icon = () => {
  return <SvgBase64Img src={TWITTER_ICON} alt='Twitter' width='24'/>
}

export const TwitterButton = () => {
  return <StyledButton><Icon/>&nbsp;Thread</StyledButton>
}
