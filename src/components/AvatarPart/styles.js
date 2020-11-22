import styled from 'styled-components';

const getZIndex = ({ part }) => {
  switch (part) {
    case 'BEARD':
      return 10;
    default:
      return 0;
  }
};

export default styled.div`
  position: absolute;
  top: 0;
  z-index: ${getZIndex};
`;
