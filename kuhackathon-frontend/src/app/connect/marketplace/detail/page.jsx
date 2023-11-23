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

//components
import TagItem from "@/components/TagItem/TagItem";

const Page = () => {
  const [isJoin, setIsJoin] = useState(false);
  const router = useRouter();

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

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full  h-[380px] bg-black">
        <Carousel>
          <img
            src="/images/eventMenu1.png"
            alt="event detail1"
            className="h-100"
          />
          <img
            src="/images/eventMenu2.png"
            alt="event detail2"
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
            <div className="cursor-pointer" onClick={() => router.back()}>
              <ChevronLeft className="h-8 w-8" />
            </div>

            <p className="text-2xl font-[500] mb-0">
              รับสมัครพนักงานขายขนม part time
            </p>
          </div>
          <TagItem
            image={<Image src="/images/point.png" width={32} height={32} />}
            title="Kasetsart University"
            subtitle="50 Ngam Wong Wan Rd, Lat Yao, Chatuchak, Bangkok"
          />
          <TagItem
            image={<Image src="/images/calendar.png" width={32} height={32} />}
            title="14 December, 2021"
            subtitle="Tuesday, 4:00PM - 9:00PM"
          />

          <TagItem
            image={<Image src="/images/user.png" width={32} height={32} />}
            title="100 คน"
          />
          {/* คุณสมบัติ */}
          <p className="text-md font-semibold  mt-4">คุณสมบัติ</p>
          <p className="text-md font-[500] ">
            • วุฒิ ปวส หรือกำลังศึกษาอยู่ปริญญาตรี <br />• มีความรับผิดชอบ
            ซื่อสัตย์ บุคลิกภาพดี ตรงต่อเวลา
          </p>
          {/* รายไ้ */}
          <p className="text-md font-semibold  mt-2">รายได้</p>
          <p className="text-md font-[500] ">400 บาท/ชั่วโมง</p>
          {/* เวลาเข้างาน */}
          <p className="text-md font-semibold  mt-2">เวลาเข้างาน</p>
          <p className="text-md font-[500]">4:00PM - 9:00PM</p>

          <div
            className="absolute"
            style={{
              left: "50%",
              top: "480px",
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
              สมัคร
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
