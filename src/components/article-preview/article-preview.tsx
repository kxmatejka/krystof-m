import React, {FC} from 'react'
import styled from 'styled-components'
import {Separator} from '../separater'

const StyledSection = styled.section`
  color: var(--light-color);
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;

  @media only screen and (min-width: 1000px)  {
    transition: transform 1s ease;

    &:hover {
      transition: transform 0.25s ease;
      transform: scale(1.1);
    }
  }
`

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  margin: 10px 0 20px 0;
`

const StyledImgPreview = styled.p`
  margin: 15px 0 20px 0;
  padding: 0;
  text-align: justify;
  line-height: 1.6rem;
`

const StyledImg = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
  margin: 0;
  opacity: 1;
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
  color: var(--dark-color);
  border-radius: 5px;
  font-weight: 700;
  background: var(--highlight);
  transition: all ease 0.3s;

  &:hover {
    color: var(--light-color);
    background: var(--highlight-hover);
  }
`

interface Props {
  title: string
  image: string
  preview: string
  tags: string[]
  date: string
}

export const ArticlePreview: FC<Props> = ({title, image, preview, tags, date}) => {
  return (
    <StyledSection>
      <StyledH2>{title}</StyledH2>
      <StyledImg src={image} alt={title}/>
      <StyledImgPreview>{preview}</StyledImgPreview>
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
