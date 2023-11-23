"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

//icon
import { MapPin } from "lucide-react";

function ParttimeCard({ data }) {
  const router = useRouter();

  function onViewDetail() {
    router.push("/connect/parttime/detail?id=" + data?.id);
  }


function generateDate(date) {
  const dateObj = new Date(date);
  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  const month = thaiMonths[dateObj.getMonth()];
  const day = dateObj.getDate();
  const shortYear = (dateObj.getFullYear() + 543) % 100; // Extract the last two digits of the year

  return `${day} ${month} ${shortYear}`;
}
  return (
    <article
      className="flex bg-white transition hover:shadow-xl rounded-md overflow-hidden cursor-pointer"
      onClick={() => onViewDetail()}
    >
      <div className="p-2 flex items-center justify-center">
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img
            alt="Guitar"
            src={data?.image_poster}
            className="w-full object-cover h-full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 gap-2 ">
        <div>
          <p className="text-xs font-bold  line-clamp-2 text-[#197060]">
             {`${generateDate(data?.date_start_work)} - ${generateDate( data?.date_end_work)}`}
          </p>
          <p className="text-md font-bold mb-2 line-clamp-2">{data?.title}</p>

          <div className="flex items-center">
            <MapPin color="#8f8f8f" />
            <span className="text-xs text-gray-700 ml-1">{data?.location}</span>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "8px",
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{
              border: "1px solid #197060",
              padding: "2px 8px",
              borderRadius: "8px",
            }}
          >
            <h1 className="text-[#197060] text-2xl font-[500]">
              {data?.price}
            </h1>
            <div className="mt-1.5 sm:mt-0">
              <p
                className="text-gray-500 
                text-xs
                font-medium
            "
              >
                บาท
              </p>

              <p className="font-medium    text-xs">ต่อชั่วโมง</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 h-full w-full"
            style={{
              border: "1px solid #197060",
              padding: "2px 8px",
              borderRadius: "8px",
            }}
          >
            <Image src="/images/user.png" width={20} height={20} alt="user" />
            <p className="font-medium    text-xs">{data?.people} คน</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ParttimeCard;
