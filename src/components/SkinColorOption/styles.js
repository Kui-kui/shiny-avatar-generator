import styled from 'styled-components';

export default styled.div`
  margin-bottom: 24px;
  margin-top: 8px;

  .picker {
    margin-bottom: ${({ isOpen }) => (isOpen ? '-14px' : '0')};
    margin-top: 16px;
  }
`;

export const pickerStyle = {
  default: {
    card: {
      justifyContent: 'center',
      marginBottom: 0,
    },
  },
};
