import styled from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ disabled }) => (!disabled ? '#4b5ffa' : '#a8baff')};
  border-radius: 24px;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: 'Rubik';
  font-size: 18px;
  height: 48px;
  justify-content: center;
  min-width: 200px;
  padding: 8px 24px;
`;

export const Label = styled.div``;
