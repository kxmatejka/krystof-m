import React, {FC} from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  color: var(--light-color);
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
`

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 20px 0;
`

const StyledImgPreview = styled.p`
  position: absolute;
  margin: 0;
  padding: 10px;
  top: 180px;
  text-align: justify;
  line-height: 1.6rem;
  background-color: #111c2a70;
  transition: all ease 0.5s;
`

const StyledImg = styled.img`
  max-height: 220px;
  width: 100%;
  object-fit: cover;
  margin: 0;
  opacity: 1;
  transition: all ease 0.5s;
`

const StyledImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  margin: 0 0 10px 0;

  &:hover {
    ${StyledImgPreview} {
      top: 0;
      background: transparent;
    }

    ${StyledImg} {
      opacity: 0.3;
    }
  }
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

const StyledSeparator = styled.hr`
  margin: 20px 0 30px 0;
  border: 1px solid var(--dark-low-contrast);
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
      <StyledImgContainer>
        <StyledImg src={image} alt={title}/>
        <StyledImgPreview>{preview}</StyledImgPreview>
      </StyledImgContainer>
      <StyledFooterContainer>
        <StyledTagsContainer>
          {tags.map((tag, index) => <StyledTagsItem key={index}>{tag}</StyledTagsItem>)}
        </StyledTagsContainer>
        <div>
          {date}
        </div>
      </StyledFooterContainer>
      <StyledSeparator/>
    </StyledSection>
  )
}
