"use client";
import React, { useState } from "react";
import { ChevronLeft, Filter } from "lucide-react";
import { useRouter } from "next/navigation";


//component
import SearchBar from "@/components/SearchBar/SearchBar";
import ClubCard from "@/components/Card/ClubCard";


const filterOptions = [
{ label: "Business", value: 1 },
{ label: "Culture", value: 2},
{ label: "Volunteer", value: 3 },
];

const mockClub = [
  {
    id: 1,
    name: "KU Startup",
    image: "/images/kustartup.jpg",
    description:
      "เพื่อส่งเสริมและสนับสนุนให้นักศึกษามหาวิทยาลัยเกษตรศาสตร์ได้เรียนรู้และพัฒนาทักษะที่จำเป็นสำหรับการเป็นผู้ประกอบการ",
  },
  {
    id: 2,
    name: "KU Blockchain",
    image: "/images/kublockchain.jpg",
    description:
      "ชมรมที่มุ่งเน้นให้นักศึกษาได้เรียนรู้และพัฒนาทักษะด้านเทคโนโลยีบล็อกเชน โดยกิจกรรมของชมรมจะครอบคลุมทั้งด้านพื้นฐานของบล็อกเชน",
  },
  {
    id: 3,
    name: "KU Case Club",
    image: "/images/kucaseclub.png",
    description:
      "ชมรมที่เน้นการเรียนรู้และพัฒนาทักษะด้านการแก้ไขปัญหาธุรกิจ โดยกิจกรรมของชมรมจะเน้นการแก้ไขปัญหาที่เกิดขึ้นในชีวิตจริง",
  },
  {
    id: 4,
    name: "KU Tech",
    image: "/images/kutech.png",
    description:
      "ชมรมที่เน้นการเรียนรู้และพัฒนาทักษะด้านเทคโนโลยี โดยกิจกรรมของชมรมจะเน้นการเรียนรู้เกี่ยวกับเทคโนโลยีต่างๆ",
  },
];



const Page = () => {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState(1);

 

  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#EDF0F7",
        overflow: "hidden",
        marginBottom: "48px",
      }}
    >
      <div className="flex items-center ">
        <div className="cursor-pointer" onClick={() => router.push("/connect")}>
          <ChevronLeft className="h-8 w-8" />
        </div>
        <p className="text-2xl font-bold text-[#197060]">Clubs</p>
      </div>
      <SearchBar
        filterOptions={filterOptions}
        filterType="checkbox"
        filterValue={filterValue}
        setFilterValue={(value) => {
          setFilterValue(value);
        }}
      />

      <div className="flex flex-col items-cente gap-2">
        {mockClub.map((club) => {
          return (
            <React.Fragment key={club.id}>
              <ClubCard data={club} />
            </React.Fragment>
          )
        }
        )}
     
      </div>
    </div>
  );
};

export default Page;
