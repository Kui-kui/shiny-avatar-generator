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
    justify-content: center;
    margin-bottom: 64px;
    margin-top: 16px;

    @media (max-width: 640px) {
      justify-content: flex-start;
      margin-bottom: 0;
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
`;
