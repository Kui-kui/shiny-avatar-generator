import styled from 'styled-components';

export default styled.div`
  background-color: #f7f8f9;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
  height: ${({ height }) => `${height}px`};
  padding: 0 24px;
  width: 200px;

  .headline {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 32px;
    margin-top: 24px;
    text-align: center;
  }
`;
