import styled from 'styled-components';

export default styled.div`
  .body {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .preview {
    background-color: #f5fbff;
    border: 20px solid white;
    height: 400px;
    position: relative;
    width: 400px;
  }

  .preview__body {
    position: absolute;
    bottom: 0;
    right: 42px;
  }

  .root {
    align-items: center;
    background-color: #f5fbff;
    display: flex;
    height: ${({ height }) => `${height}px`};
  }

  .sidebar {
    background-color: #f7f8f9;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
    height: ${({ height }) => `${height}px`};
    padding: 0 24px;
    width: 200px;
  }
`;
