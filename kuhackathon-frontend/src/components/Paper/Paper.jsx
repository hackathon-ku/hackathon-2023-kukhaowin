import React from "react";
import PropTypes from "prop-types";

const Paper = ({
  children,
  width ,
  padding ,
  borderRadius ,
  backgroundColor ,
  boxShadow ,
  ...restProps
}) => {
  const containerClasses = `w-${width} p-${padding} rounded-${borderRadius} bg-${backgroundColor} ${boxShadow}`;

  return (
    <div className={containerClasses} {...restProps}>
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
};

Paper.defaultProps = {
  width: "full",
  padding: "4",
  borderRadius: "md",
  backgroundColor: "white",
  boxShadow: "shadow-md",
};

export default Paper;
