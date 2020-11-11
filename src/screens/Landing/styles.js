import styled from 'styled-components';

export default styled.div`
  background-color: #f5fbff;
  display: flex;
  min-height: 100vh;

  .avatar {
    background-color: #f5fbff;
    height: 400px;
    position: relative;
    width: 400px;
  }

  .body {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
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
