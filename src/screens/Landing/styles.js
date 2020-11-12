import styled from 'styled-components';

export default styled.div`
  background-color: #f5fbff;
  display: flex;
  min-height: 100vh;

  .avatar {
    background-color: #f5fbff;
    height: ${({ size }) => size}px;
    position: relative;
    width: ${({ size }) => size}px;
  }

  .body {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 64px;

    @media (max-width: 640px) {
      margin-top: 16px;
    }
  }

  .button {
    border: 0;
    margin-bottom: 48px;
  }

  .preview {
    border: 20px solid white;
    margin-bottom: 24px;
  }

  .svgContainer {
    position: absolute;
    top: 0;
  }
`;
