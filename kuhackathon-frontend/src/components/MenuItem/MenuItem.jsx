import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const MenuItem = ({ menuName, menuIcon, menuLink, nameColor ,onClick}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={()=>{
      router.push(menuLink)
      onClick()
    }}>
      <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
          {menuIcon}
        </div>
      </div>
      <div className="flex justify-center" style={{ color: nameColor }}>
        <p className="text-xs">{menuName}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuIcon: PropTypes.element.isRequired,
  menuLink: PropTypes.string,
  nameColor: PropTypes.string,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  nameColor: "#000000",
  menuLink: "",
  menuName: "",
  menuIcon: "",
  onClick: () => {}

};

export default MenuItem;
