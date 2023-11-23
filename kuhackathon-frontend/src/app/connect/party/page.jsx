"use client";
import React, { useState,useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SearchBar from "@/components/SearchBar/SearchBar";

//component
import PartyCard from "@/components/Card/PartyCard";
const mockParties = [
  {
    id: 1,
    date: "24 พฤศจิกายน 66",
    title: "เล่นบอร์ดเกมสำหรับเด็ก",
    location: "สวนสาธารณะ",
    participants: "5/10 คน",
    description: "ปาร์ตี้สำหรับเด็กๆ ที่ต้องการเล่นบอร์ดเกมสนุกๆ ด้วยกัน",
    create_by: "นายสมชาย ศรีสุข",
    faculty: "คณะวิศวกรรมศาสตร์",
  },
  {
    id: 2,
    date: "25 พฤศจิกายน 66",
    title: "แข่งบอร์ดเกม",
    location: "ร้านบอร์ดเกม",
    participants: "8/12 คน",
    description: "ปาร์ตี้สำหรับผู้ที่ชื่นชอบการแข่งบอร์ดเกม ชิงรางวัลมากมาย",
    create_by: "นางสาวสุภาพร แก้วใส",
    faculty: "คณะบริหารธุรกิจ",
  },
  {
    id: 3,
    date: "26 พฤศจิกายน 66",
    title: "บอร์ดเกมสำหรับครอบครัว",
    location: "บ้านส่วนตัว",
    participants: "12/15 คน",
    description: "ปาร์ตี้สำหรับครอบครัวที่ต้องการใช้เวลาร่วมกันอย่างสนุกสนาน",
    create_by: "นางสาวอรวรรณ พรหมมาศ",
    faculty: "คณะมนุษยศาสตร์",
  },
  {
    id: 4,
    date: "27 พฤศจิกายน 66",
    title: "บอร์ดเกมสำหรับมือใหม่",
    location: "ร้านบอร์ดเกม",
    participants: "10/12 คน",
    description:
      "ปาร์ตี้สำหรับผู้ที่เพิ่งเริ่มต้นเล่นบอร์ดเกม เรียนรู้กฎกติกาและเล่นเกมสนุกๆ ด้วยกัน",
    create_by: "นายภิญโญ ธรรมวิชัย",
    faculty: "คณะวิทยาศาสตร์",
  },
  {
    id: 5,
    date: "28 พฤศจิกายน 66",
    title: "บอร์ดเกมแนวแฟนตาซี",
    location: "ร้านบอร์ดเกม",
    participants: "12/15 คน",
    description:
      "ปาร์ตี้สำหรับผู้ที่ชื่นชอบเกมแนวแฟนตาซี สวมบทบาทและผจญภัยไปด้วยกัน",
    create_by: "นางสาวกัญญาณัฐ จันทร์เจริญ",
    faculty: "คณะศิลปศาสตร์",
  },
  {
    id: 6,
    date: "29 พฤศจิกายน 66",
    title: "บอร์ดเกมแนวประวัติศาสตร์",
    location: "ห้องสมุดกลาง",
    participants: "10/12 คน",
    description:
      "ปาร์ตี้สำหรับผู้ที่สนใจประวัติศาสตร์ เรียนรู้เรื่องราวและเล่นบอร์ดเกมสนุกๆ ด้วยกัน",
    create_by: "นายณัฐพล ศรีวิไล",
    faculty: "คณะนิติศาสตร์",
  },
  {
    id: 7,
    date: "30 พฤศจิกายน 66",
    title: "บอร์ดเกมแนววิทยาศาสตร์",
    location: "พิพิธภัณฑ์วิทยาศาสตร์",
    participants: "8/12 คน",
    description:
      "ปาร์ตี้สำหรับผู้ที่ชื่นชอบวิทยาศาสตร์ เรียนรู้หลักการทางวิทยาศาสตร์และเล่นบอร์ดเกมสนุกๆ ด้วยกัน",
    create_by: "นายวรเชษฐ์ แสงทอง",
    faculty: "คณะเศรษฐศาสตร์",
  },
  {
    id: 8,
    date: "1 ธันวาคม 66",
    title: "บอร์ดเกมแนวจิตวิทยา",
    location: "ร้านบอร์ดเกม",
    participants: "12/15 คน",
    description:
      "ปาร์ตี้สำหรับผู้ที่สนใจจิตวิทยา เรียนรู้เกี่ยวกับจิตใจและเล่นบอร์ดเกมสนุกๆ ด้วยกัน",
    create_by: "นายแพทย์ธีรยุทธ บุญเจริญ",
    faculty: "คณะแพทยศาสตร์",
  },
];
const Page = () => {
  const router = useRouter();

  const [renderData , setRenderData] = useState(mockParties)
  const [searchValue, setSearchValue] = useState("");



  function onSearch(value) {
    const result = mockParties.filter((party) => {
      return party.title.toLowerCase().includes(value.toLowerCase());
    });
    setRenderData(result);
  }

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
        <p className="text-2xl font-bold text-[#197060]">Party</p>
      </div>
    <SearchBar
    haveFilter={false}
    searchValue={searchValue}
     setSearchValue={(value) => {
      onSearch(value)
      setSearchValue(value)
     }} />
      <div className="flex flex-col mt-2 gap-4 overflow-y-auto" style={{}}>
        {renderData?.map((party, index) => {
          return (
            <React.Fragment key={index}>
              <PartyCard data={party} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
