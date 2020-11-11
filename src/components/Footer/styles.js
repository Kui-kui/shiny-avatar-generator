import styled from 'styled-components';

export default styled.div`
  background-color: white;
  bottom: 0;
  filter: drop-shadow(0 0mm 5mm rgba(0, 0, 0, 0.1));
  flex-direction: column;
  position: fixed;
  transform: translate(
    0,
    ${({ isHidden, footerHeight }) => (isHidden ? footerHeight : 0)}px
  );
  transition: 0.5s ease-in-out;
  width: 100vw;

  .labels {
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
    padding: 24px 0;
  }

  .options {
    display: flex;
    flex-direction: row;
    height: 48px;
    justify-content: center;
    padding: 24px 0;
    border-bottom: 1px solid #edeef1;
  }

  .toggle {
    align-items: center;
    background-color: white;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: -35px;
    width: 70px;
  }

  .toggleChevron {
    font-size: 24px;
    margin-top: ${({ isHidden }) => (isHidden ? '8px' : '16px')};
    transition: 0.5s ease-in-out;
    transform: ${({ isHidden }) => (isHidden ? `rotate(180deg);` : '')};
  }
`;
