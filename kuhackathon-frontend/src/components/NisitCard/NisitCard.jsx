import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ContainerClasses =
  "w-full h-157 border rounded-2xl bg-white shadow-md  p-7";

const NisitCard = ({
  nisitId,
  nisitName,
  nisitFaculty,
  nisitMajor,
  nisitAdvisor,
}) => {
  return (
    <div className={ContainerClasses} style={{
      display:"grid",
      gridTemplateColumns:"1fr 2fr",
    }}>
      <div className="flex justify-center">
        <Image
          src={`/images/nisit.svg`}
          width={100}
          height={100}
          alt="profile"
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <div>
          <span className="block text-md font-bold leading-tight">
            {nisitId}
          </span>
          <span className="block text-md font-semibold">{nisitName}</span>
          <span className="block text-xs text-gray-700">{nisitFaculty}</span>
          <span className="block text-xs text-gray-700">{nisitMajor}</span>
        </div>
        <div className="flex items-center">
          <span className="block text-xs font-semibold text-gray-700">
            ที่ปรึกษา
          </span>
          <span className="w-1"></span>
          <span className="text-xs text-gray-700">{nisitAdvisor}</span>
        </div>
      </div>
    </div>
  );
};

NisitCard.propTypes = {
  nisitId: PropTypes.string,
  nisitName: PropTypes.string,
  nisitFaculty: PropTypes.string,
  nisitMajor: PropTypes.string,
  nisitAdvisor: PropTypes.string,
};

export default NisitCard;
