"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ChevronLeft,User } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Badge } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useSearchParams } from "next/navigation";

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

//components
import TagItem from "@/components/TagItem/TagItem";

const Page = () => {
  const [isJoin, setIsJoin] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsId = searchParams.get("id");

  function onClickJoin() {
    setIsJoin(true);
    toast.success("เข้าร่วมกิจกรรมสำเร็จ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      style: {
        top: "80px",
        left: "100px",
      },
    });
  }

  const data = mockParties.find((item) => item.id === Number(paramsId));
  const people = Number(data?.participants.split("/")[0]);

const renderAvatar = () => {
  const avatar = [];
  for (let i = 0; i < people; i++) {
    avatar.push(
      <Avatar
        size="md"
        src="/images/user.png"
        alt="avatar"
        rounded
        key={i}
      />
    );
  }
  return avatar;

};

function getImage (){
  const image = Math.floor(Math.random() * 4) + 1;
  return `/images/board${image}.jpg`;
}

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full  h-[380px] bg-black">
        <Carousel>
          <img src={getImage()} alt="event detail1" className="h-100" />
        </Carousel>
      </div>
      <div
        className="bg-white w-full h-full"
        style={{
          borderRadius: "24px 24px 0px 0px",
          marginTop: "-16px",
          position: "relative",
        }}
      >
        <div className="px-4 pt-8 pb-2 relative h-full">
          <div className="flex items-center mb-4 ">
            <div className="cursor-pointer" onClick={() => router.back()}>
              <ChevronLeft className="h-8 w-8" />
            </div>

            <p className="text-2xl font-[500] mb-0">{data?.title}</p>
          </div>
          <div className="flex flex-wrap gap-2 scroll px-2 py-2">
            <Badge color="info">บอร์ดเกม</Badge>
            <Badge color="info">เกมส์</Badge>
            <Badge color="info">เพื่อน</Badge>
          </div>
          <TagItem
            image={<Image src="/images/point.png" width={32} height={32} />}
            title={data?.location}
          />
          <TagItem
            image={<Image src="/images/calendar.png" width={32} height={32} />}
            title="14 December, 2021"
            subtitle="Tuesday, 4:00PM - 9:00PM"
          />

          <p className="text-md font-semibold ps-2 mt-2">ผู้สร้างกิจกรรม</p>
          <TagItem
            image={<Image src="/images/user.png" width={32} height={32} />}
            title={data?.create_by}
            subtitle={data?.faculty}
          />

          <p className="text-md font-semibold ps-2 mt-2">รายละเอียด</p>
          <p className="text-md px-2 ">{data?.description}</p>
          <div className="flex items-center gap-2 mt-2 px-2">
            <User
              color="#8f8f8f"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span className="text-md text-gray-700 ml-1">
              {data?.participants}
            </span>
            <span className="text-md text-gray-700 ml-1">เข้าร่วม</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-2 px-2">
            {renderAvatar()}
          </div>

          <div
            className="absolute"
            style={{
              left: "50%",
              top: "520px",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              size="lg"
              gradientDuoTone="greenToBlue"
              style={{
                width: "70vw",
              }}
              onClick={() => onClickJoin()}
              disabled={isJoin}
            >
              เข้าร่วม
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
