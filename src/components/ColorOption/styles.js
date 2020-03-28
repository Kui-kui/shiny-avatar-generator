import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  padding: 8px 0;
  position: relative;

  .color-container {
    background-color: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 5px;
  }

  .color-preview {
    background-color: ${({ color }) => color};
    border-radius: 2px;
    height: 14px;
    width: 36px;
  }

  .label {
    margin-bottom: 0;
    margin-right: 8px;
    margin-top: 0;
  }

  .sketch-picker {
    left: 80px;
    position: absolute;
    top: 40px;
    z-index: 2;
  },
`;
