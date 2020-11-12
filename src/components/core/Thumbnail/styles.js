import styled from 'styled-components';

export const Root = styled.div`
  ${({ isSelected }) =>
    isSelected ? 'filter: drop-shadow(0 0mm 5mm rgba(0, 0, 0, 0.05));' : ''};
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 4px;
  transition: all 0.25s, visibility 0.25s ease-in-out;

  :hover {
    filter: drop-shadow(0 0mm 5mm rgba(0, 0, 0, 0.1));
    transform: scale(1.2);
  }
`;

export const Color = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  height: 56px;
  width: 56px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 56px;
  width: 56px;
`;
