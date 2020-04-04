import styled from 'styled-components';

export default styled.div`
  padding-top: 8px;

  .chevron {
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1);')};
    transition-duration: 1s;
    transition-property: transform;
  }

  .children {
    padding-left: 4px;
    padding-top: 8px;
  }

  .labelContainer {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
