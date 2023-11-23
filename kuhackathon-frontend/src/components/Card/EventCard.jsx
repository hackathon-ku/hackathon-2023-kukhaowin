"use client";
import React from "react";
import { useRouter } from "next/navigation";

//icon
import { MapPin } from "lucide-react";

function EventCard({
  data
}) {
  const router = useRouter();

  function onViewDetail() {
    router.push("/connect/event/detail" + `?id=${data?.id}`);
  }

  function getMonth(month) {
    switch (month) {
      case 1:
        return "ม.ค.";
      case 2:
        return "ก.พ.";
      case 3:
        return "มี.ค.";
      case 4:
        return "เม.ย.";
      case 5:
        return "พ.ค.";
      case 6:
        return "มิ.ย.";
      case 7:
        return "ก.ค.";
      case 8:
        return "ส.ค.";
      case 9:
        return "ก.ย.";
      case 10:
        return "ต.ค.";
      case 11:
        return "พ.ย.";
      case 12:
        return "ธ.ค.";
      default:
        return "";
    }
  }
        

  function formatDate(date) {
    if (!date) return "";
    const dateSplit = date.split("-");
    const year = (parseInt(dateSplit[0]) + 543 )% 100;
    const month = parseInt(dateSplit[1]);
    const day = parseInt(dateSplit[2]);

    return `${day} ${getMonth(month)} ${year}`;
    
  }

  return (
    <article
      className="flex bg-white transition hover:shadow-xl rounded-md overflow-hidden cursor-pointer"
      onClick={() => onViewDetail()}
    >
      <div
        className="sm:flex-shrink-0 p-2"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <img
          alt="Guitar"
          src={data?.image_post}
          className="w-full object-cover h-full"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 ">
        <div>
          <p className="text-xs font-bold mb-2 line-clamp-2 text-[#FF3B30]">
            {`${data?.date_start} - ${formatDate(
              data?.date_end
            )}`}
          </p>
          <p
            className="text-md font-bold mb-2 line-clamp-2"
            style={{
              lineHeight: "0.8",
            }}
          >
            {data?.name}
          </p>
        </div>
        <div className="flex items-center">
          <MapPin color="#8f8f8f" />
          <span className="text-xs text-gray-700 ml-1">
            Kasetsart University
          </span>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
