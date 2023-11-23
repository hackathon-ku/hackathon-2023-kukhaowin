"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ChevronLeft } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar } from "flowbite-react";
import Tab from "@/components/Tab/Tab";

//components
import TagItem from "@/components/TagItem/TagItem";
import EventCard from "@/components/Card/EventCard";
import JoinClubModal from "@/components/modal/JoinClubModal";

const Page = () => {
  const [isJoin, setIsJoin] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const router = useRouter();

  function onClickJoin() {
    setIsJoin(true);
    toast.success("ส่งคำขอเข้าร่วมชมรมเรียบร้อย", {
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


const mockEvents = [
  {
    id: 1,
    date_start: "2023-11-24",
    date_end: "2023-11-26",
    name: "hackathon club",
    image_post: "/images/event.png",
  },
];

const mockPeople = [
  {
    name: "นายศราวุธ ศรีสุข",
    faculty: "วิศวกรรมคอมพิวเตอร์",
  },
  {
    name: "นายสุชีพ แก้วใส",
    faculty: "บริหารธุรกิจ",
  },
  {
    name: "นางสาว อรวรรณ พรหมมาศ",
    faculty: "มนุษยศาสตร์",
  },
  {
    name: "นายภิญโญ วิชัย",
    faculty: "วิทยาศาสตร์",
  },
];

   const tabs = [
     {
       key: "tab1",
       tab: "รายละเอียด",
       content: (
         <>
           <p className="text-md font-semibold  mt-4 px-2">รายละเอียด</p>
           <p className="text-sm  mt-2 px-2">
             เพื่อส่งเสริมและสนับสนุนให้นักศึกษามหาวิทยาลัยเกษตรศาสตร์ได้เรียนรู้และพัฒนาทักษะที่จำเป็นสำหรับการเป็นผู้ประกอบการ
           </p>
           <p className="text-md font-semibold  mt-4 px-2">อาจารย์ที่ปรึกษา</p>
           <TagItem
             image={<Avatar rounded />}
             title="ดร.เอกอนงค์ ตั้งฤกษ์วราสกุล"
             subtitle="อาจารย์ประจำภาควิชา (N2019)"
           />
           <p className="text-md font-semibold  mt-4 px-2">ประธานชมรม</p>
           <TagItem
             image={<Avatar rounded />}
             title="นายเชน ไอน่า"
             subtitle="นักศึกษาคณะแพทย์ศาสตร์"
           />
         </>
       ),
     },
     {
       key: "tab2",
       tab: "กิจกรรม",
       content: (
         <div className="flex flex-col gap-2">
           {mockEvents.map((event) => (
             <React.Fragment key={event.id}>
               <EventCard data={event} />
             </React.Fragment>
           ))}
         </div>
       ),
     },
     {
       key: "tab3",
       tab: "สมาชิก",
       content: (
         <div className="flex flex-col gap-2">
           <p className="text-md font-semibold   px-2">ประธานชมรม</p>
           <div className="flex items-center">
             <Avatar rounded />
             <div className="flex flex-col ml-2">
               <p className="text-sm font-semibold">นายเชน ไอน่า</p>
               <p className="text-xs text-gray-700">นักศึกษาคณะแพทย์ศาสตร์</p>
             </div>
           </div>
           <p className="text-md font-semibold  mt-2 px-2">รองประธานชมรม</p>
           <div className="flex items-center">
             <Avatar rounded />
             <div className="flex flex-col ml-2">
               <p className="text-sm font-semibold">นางสาวสมหญิง สมใจ</p>
               <p className="text-xs text-gray-700">วิศวกรรมคอมพิวเตอร์</p>
             </div>
           </div>
           <p className="text-md font-semibold  mt-2 px-2">
             สมาชิกทั่วไป ( 4 )
           </p>
           <div className="grid grid-cols-2 gap-4">
             {mockPeople.map((people, index) => (
               <div className="flex items-center" key={index}>
                 <Avatar rounded />
                 <div className="flex flex-col ml-2">
                   <p className="text-sm font-semibold">
                      {people.name}
                   </p>
                   <p className="text-xs text-gray-700">
                      {people.faculty}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       ),
     },
   ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full  h-[380px] bg-black">
        <Carousel>
          <img
            src="/images/kustartup.jpg"
            alt="event detail1"
            className="h-100"
          />
        
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
            <div className="cursor-pointer" onClick={() => router.push('/connect/club')}>
              <ChevronLeft className="h-8 w-8" />
            </div>

            <p className="text-2xl font-[500] mb-0">
              Ku Startup{" "}
              <span className="rounded-md bg-yellow-300 px-2 py-1 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                Business
              </span>
            </p>
          </div>

          <Tab tabs={tabs} defaultActiveKey="tab1" />

          <div className="flex items-center justify-center mt-4">
            {isJoin ? (
              <Button
                size="lg"
                gradientDuoTone="greenToBlue"
                style={{
                  width: "70vw",
                }}
                onClick={() => setContactModal(true)}
              >
                ดูชมรม
              </Button>
            ) : (
              <Button
                size="lg"
                gradientDuoTone="greenToBlue"
                style={{
                  width: "70vw",
                }}
                onClick={() => {
                  setContactModal(true);
                }}
                disabled={isJoin}
              >
                เข้าร่วมชมรม
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
      <JoinClubModal
        isOpen={contactModal}
        defaultValue={isJoin}
        onClose={(value) => {
          setContactModal(value);
        }}
        onSuccess={() => {
          onClickJoin();
        }
        }
      />
    </div>
  );
};

export default Page;
