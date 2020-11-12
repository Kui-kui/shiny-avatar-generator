import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;

  :hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }

  .label {
    align-items: center;
    color: ${({ isSelected }) => (isSelected ? '#4b5ffa' : '#17294d')};
    cursor: pointer;
    display: flex;
    padding: 24px;
    text-align: center;
  }
`;
