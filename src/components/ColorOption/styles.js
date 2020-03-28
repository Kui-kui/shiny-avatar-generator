import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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
    margin-right: 8px;
  }

  .sketch-backdrop {
    bottom: 0;
    left:0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .sketch-picker {
    left: 80px;
    position: absolute;
    top: 40px;
    z-index: 2;

  },
`;
