'use client'
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPaper = styled.div`
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "16px"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 0px 10px rgba(0, 0, 0, 0.1)"};
`;

const Paper = ({ children, ...restProps }) => {
  return <StyledPaper {...restProps}>{children}</StyledPaper>;
};

Paper.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
};

export default Paper;
