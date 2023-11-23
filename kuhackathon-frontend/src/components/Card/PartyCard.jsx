"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Badge } from "flowbite-react";

//icon
import { MapPin, User } from "lucide-react";

function PartyCard({ data }) {
  const router = useRouter();

  function onViewDetail() {
    router.push("/connect/party/detail?id=" + data.id);
  }
  return (
    <article
      className="flex bg-white transition hover:shadow-xl rounded-md overflow-hidden cursor-pointer"
      onClick={() => onViewDetail()}
    >
      <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 ">
        <div>
          <p className="text-xs font-bold mb-2 line-clamp-2 text-[#197060]">
            {data.date}
          </p>
          <p className="text-md font-bold mb-2 line-clamp-2">{data.title}</p>
          <div className="flex items-center">
            <MapPin color="#8f8f8f" className="h-4 w-4" />
            <span className="text-xs text-gray-700 ml-1">{data.location}</span>
          </div>
          <div className="flex items-center mt-1">
            <User color="#8f8f8f" className="h-4 w-4" />
            <span className="text-xs text-gray-700 ml-1">{
              data.participants
            }</span>
          </div>
          <p className="text-xs my-2">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="info">บอร์ดเกม</Badge>
            <Badge color="info">เกมส์</Badge>
            <Badge color="info">เพื่อน</Badge>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PartyCard;
