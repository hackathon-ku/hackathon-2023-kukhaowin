'use client'

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = ({ menuName, menuIcon, menuLink,nameColor }) => {
  return (
    <MenuItemContainer>
      <div className="flex justify-center">
        <Image src={menuIcon} alt={menuName} width={62} height={62} />
      </div>
      <div className="flex justify-center" style={{
        color: nameColor,
      
      }}>
        <p>{menuName}</p>
      </div>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuIcon: PropTypes.string.isRequired,
  menuLink: PropTypes.string.isRequired,
  nameColor: PropTypes.string,
};

MenuItem.defaultProps = {
  nameColor: "#000000",
};



export default MenuItem;