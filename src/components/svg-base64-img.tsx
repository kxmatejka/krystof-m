import React, {FC} from 'react'

interface Props {
  src: string
  alt: string
  title?: string
  width?: string
  height?: string
}

export const SvgBase64Img: FC<Props> = ({src, ...props}) => {
  return (
    <img {...props} src={`data:image/svg+xml;base64,${src}`}/>
  )
}
