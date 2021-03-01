import React, {FC} from 'react'
import styled from 'styled-components'
import {Separator} from '../separater'
import {LinkBlogPost} from '../link'

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  margin: 10px 0 20px 0;
`

const StyledSection = styled.section`
  @media only screen and (min-width: 1000px)  {
    transition: transform 1s ease;

    &:hover {
      transition: transform 0.25s ease;
      transform: scale(1.1);

      ${StyledH2} {
        color: var(--highlight);
      }
    }
  }
`

const StyledImgPreview = styled.p`
  margin: 15px 0 20px 0;
  padding: 0;
  text-align: justify;
  line-height: 1.6rem;
  color: var(--light) !important;
`

const StyledImg = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
  margin: 0;
`

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledTagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  margin: 0 0 0 -5px;
  padding: 0;
`

const StyledTagsItem = styled.li`
  cursor: pointer;
  padding: 2px 10px;
  margin: 0 5px 10px 5px;
  color: var(--dark);
  border-radius: 5px;
  font-weight: 700;
  background: var(--highlight);
  transition: background ease 0.3s;

  &:hover {
    background: var(--light);
  }
`

interface Props {
  slug: string
  title: string
  image: string
  preview: string
  tags: string[]
  date: string
}

export const ArticlePreview: FC<Props> = ({slug, title, image, preview, tags, date}) => {
  return (
    <StyledSection>
      <LinkBlogPost slug={slug}>
        <StyledH2>{title}</StyledH2>
        <StyledImg src={image} alt={title}/>
        <StyledImgPreview>{preview}</StyledImgPreview>
      </LinkBlogPost>
      <StyledFooterContainer>
        <StyledTagsContainer>
          {tags.map((tag, index) => <StyledTagsItem key={index}>{tag}</StyledTagsItem>)}
        </StyledTagsContainer>
        <div>
          {date}
        </div>
      </StyledFooterContainer>
      <Separator/>
    </StyledSection>
  )
}
