'use client'

import React from "react";
import PropTypes from "prop-types";

const Text = ({ type, fontSize, fontWeight, color, children, className ,style}) => {
  const textStyle = {
    ..._renderStyle(type),
    fontFamily: "sans-serif",
    color,
    ...style,
  };

  return (
    <p className={className} style={textStyle}>
      {children}
    </p>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf(["header", "subHeader", "body", "caption", "small"]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Text.defaultProps = {
  type: "body",
  color: "#000000",
  children: null,
};

function _renderStyle(type) {
  switch (type) {
    case "header":
      return {
        fontSize: fontSize || "18px",
        fontWeight: fontWeight || 700,
      };
    case "subHeader":
      return {
        fontSize: fontSize || "16px",
        fontWeight: 700,
      };
    case "body":
      return {
        fontSize: "14px",
        fontWeight: 400,
      };
    case "caption":
      return {
        fontSize: "12px",
        fontWeight: 400,
      };
    case "small":
      return {
        fontSize: "10px",
        fontWeight: 400,
      };
    default:
      return {
        fontSize: "14px",
        fontWeight: 400,
      };
  }
}

export default Text;
