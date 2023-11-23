import React from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

const ConnectCard = ({image, title, link }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center w-full  bg-white rounded-md overflow-hidden shadow-md cursor-pointer transform hover:scale-105
      hover:shadow-xl transition duration-300 ease-in-out p-4
      "
      onClick={() => router.push(link)}
    >
      <div className="flex flex-center">
        <img src={image} alt="ku logo" className="h-24 w-24" />
      </div>
      <div className="p-4 text-center">
        <p className="text-xs font-medium text-green-700 uppercase">connect</p>
        <p className="text-lg font-bold text-black ">{title}</p>
      </div>
  
    </div>
  );
};

ConnectCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

ConnectCard.defaultProps = {
  title: "",
  link: "",
};

export default ConnectCard;
