import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';

import Styled from './styles';

const Dropdown = ({ className, label, children, isOpen, toggle }) => {
  const [height, setHeight] = useState(0);
  const onToggle = useCallback(() => {
    setHeight(height === 0 ? 'auto' : 0);
    toggle();
  }, [height, toggle]);

  useEffect(() => {
    if (isOpen === false) {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <Styled className={className} isOpen={isOpen}>
      <div className="labelContainer" onClick={onToggle}>
        <p>{label}</p>
        <p className="chevron">▾</p>
      </div>
      <AnimateHeight duration={1000} height={height}>
        <div className="children">{children}</div>
      </AnimateHeight>
    </Styled>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Dropdown;
