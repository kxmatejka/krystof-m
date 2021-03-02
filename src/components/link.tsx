import React, { FC } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

const StyledA = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: color 0.5s ease;
  
  &:hover {
    transition: color 0.25s ease;
    color: var(--highlight);
  }
`

interface Props {
  href: string
}

export const Link: FC<Props> = ({ href, children  }) => {
  return (
    <NextLink href={href}>
      <StyledA>{children}</StyledA>
    </NextLink>
  )
}

export const LinkBlog: FC = ({children}) => {
  return (
    <Link href={'/blog'}>
      {children}
    </Link>
  )
}

export const LinkBlogPost: FC<{slug: string}> = ({slug, children}) => {
  return (
    <Link href={`/blog/${slug}`}>
      {children}
    </Link>
  )
}
