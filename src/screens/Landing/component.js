import React from "react";

import Body from "../../components/Body";
import useWindowSize from "../../hooks/useWindowSize.js";
import Styled from "./styles.js";

const Landing = () => {
  const { height } = useWindowSize();
  return (
    <Styled height={height}>
      <div className="root">
        <div className="preview">
          <Body className="body" color="#458FFF" />
        </div>
      </div>
    </Styled>
  );
};

export default Landing;
