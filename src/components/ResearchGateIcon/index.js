/**
 * ResearchGate Icon Component
 * Uses the official ResearchGate logo from Wikimedia Commons
 */

import React from "react";
import PropTypes from "prop-types";

function ResearchGateIcon({ size = 24, style = {} }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/32px-ResearchGate_icon_SVG.svg.png"
      alt="ResearchGate"
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "middle",
        ...style,
      }}
    />
  );
}

ResearchGateIcon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
};

export default ResearchGateIcon;
