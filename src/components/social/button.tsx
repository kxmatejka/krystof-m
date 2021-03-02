import styled from 'styled-components'

export const Button = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  height: 30px;
  padding: 2px 10px;
  margin: 0 5px 10px 5px;
  color: var(--dark);
  border-radius: 5px;
  font-weight: 700;
  background: var(--light);
  transition: background ease 0.3s;

  &:hover {
    background: #fff;
  }
`
