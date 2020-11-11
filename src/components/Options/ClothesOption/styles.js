import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Preview = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 8px 2px
    rgba(75, 95, 250, ${({ isSelected }) => (isSelected ? 0.05 : 0)});
  cursor: pointer;
  margin: 0 2px;
  transition: all 0.25s, visibility 0.25s ease-in-out;
  width: 56px;

  :hover {
    box-shadow: 0 0 8px 2px rgba(75, 95, 250, 0.05);
    transform: scale(1.2);
  }
`;
