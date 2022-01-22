import styled from 'styled-components';

export const Wrapper = styled.article`
  background-color: var(--color-white);
  padding: 1em;
  font-size: .875rem;
  border-radius: .5em;

  & code {
    display: block;
    overflow-x: scroll;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-right: .5em;
  object-fit: cover;
  border-radius: 50%;
`

export const CreatedTime = styled.time`
  font-size: .75em;
  color: var(--color-gray-500);
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
`