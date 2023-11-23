'use client';
import React from "react";
import {useRouter} from "next/navigation";
import { Home, AlertTriangle, MessageSquare, Settings } from "lucide-react";

const FooterContainerClasses =
  "flex justify-between items-center px-8 fixed bottom-0 right-0 w-full h-16 bg-white ";

const MenuItemContainerClasses = "flex flex-col items-center";

const FooterBar = () => {
  const router = useRouter();

  return (
    <div
      className={FooterContainerClasses}
      style={{
        boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {menuData.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => {
            if (item?.link) {
              router.push(item?.link);
            }
          }}
        >
          <MenuItem
            icon={item.icon}
            text={item.text}
            textColor={item?.textColor}
            link={item?.link}
          />
        </div>
      ))}
    </div>
  );
};

const MenuItem = ({ icon, text, textColor, link }) => (
  <div className={MenuItemContainerClasses}
 
  >
    {icon}
    <p className="text-xs" style={{ color: textColor }}>
      {text}
    </p>
  </div>
);

const menuData = [
  { icon: <Home className="text-black" />, text: "Home", textColor: "#000000",link:"/home" },
  {
    icon: <AlertTriangle className="text-gray-500" />,
    text: "Alert",
    textColor: "#8f8f8f",
  },
  {
    icon: <MessageSquare className="text-gray-500" />,
    text: "Center",
    textColor: "#8f8f8f",
  },
  {
    icon: <Settings className="text-gray-500" />,
    text: "Setting",
    textColor: "#8f8f8f",
  },
];

export default FooterBar;
