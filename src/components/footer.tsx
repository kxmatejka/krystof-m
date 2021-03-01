import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 50px 0 30px 0;
  font-size: 0.9rem;
`

const StyledAnchor = styled.a`
  opacity: 0.7;
  color: var(--light);
  text-decoration: none;
  padding-left: 10px;

  &:hover {
    opacity: 1;
    color: var(--light);
  }

  &:hover:after{
    opacity: 0.7;
  }

  &:after{
    content: "|";
    display: inline-block;
    padding-left: 10px;
  }

  &:last-child:after {
    display: none;
  }

  &:first-child {
    padding-left: 0;
  }
`

const links = [
  {
    href: 'https://twitter.com/crystof4',
    title: 'twitter',
  },
  {
    href: 'https://www.linkedin.com/in/kry%C5%A1tof-mat%C4%9Bjka-a16a3182/',
    title: 'linkedin',
  },
  {
    href: 'https://github.com/kxmatejka',
    title: 'github',
  },
  {
    href: '/rss',
    title: 'rss',
  },
]

export const Footer = () => {
  return (
    <StyledFooter>
      {links.map((link, index) => (
        <>
          <StyledAnchor key={index} href={link.href} target='_blank'>{link.title}</StyledAnchor>
        </>
      ))}
    </StyledFooter>
  )
}
