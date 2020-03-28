import styled from 'styled-components';

export default styled.div`
  .body {
    position: absolute;
    bottom: 0;
    right: 42px;
  }

  .preview {
    background-color: #f5fbff;
    height: 400px;
    position: relative;
    width: 400px;
  }

  .root {
    align-items: center;
    display: flex;
    justify-content: center;
    height: ${({ height }) => `${height}px`};
  }
`;
