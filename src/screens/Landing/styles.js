import styled from 'styled-components';

export default styled.div`
  .avatar {
    background-color: #f5fbff;
    height: 400px;
    position: relative;
    width: 400px;
  }

  .button {
    position: absolute;
    bottom: 40px;
  }

  .body {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  .preview {
    border: 20px solid white;
    margin-bottom: 64px;
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
