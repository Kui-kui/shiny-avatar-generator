import styled from 'styled-components';

export default styled.div`
  :hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }

  .label {
    align-items: center;
    color: ${({ isSelected }) => (isSelected ? '#4b5ffa' : '#17294d')};
    cursor: pointer;
    display: flex;
    padding: 0 24px;
    text-align: center;
  }
`;
