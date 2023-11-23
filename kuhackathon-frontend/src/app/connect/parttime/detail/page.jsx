"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ChevronLeft } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import TagItem from "@/components/TagItem/TagItem";

const Page = () => {
  const [isJoin, setIsJoin] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsId = searchParams.get("id");

    const [parttimes, setParttimes] = useState({});

    useEffect(() => {
      const fetch = async () => {
        const parttimes = await axios.get(
          "http://hackathon.django.ratchaphon1412.co/api/kupartime/post/" + paramsId
        );
        console.log('parttimes',parttimes.data.data)
        setParttimes(parttimes.data.data);
      };
      if (paramsId) fetch();
    }, []);



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

    function generateDate(date) {
      const dateObj = new Date(date);
      const thaiMonths = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];

      const month = thaiMonths[dateObj.getMonth()];
      const day = dateObj.getDate();
      const year = dateObj.getFullYear() + 543;

      return `${day} ${month} ${year}`;
    }

    function generateTime(date) {
      const dateObj = new Date(date);
      const hour = dateObj.getHours();
      const minute = dateObj.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minute}`;
    }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full  h-[380px] bg-black"
      style={{
        minHeight: "240px",
      }}
      >
        <Carousel>
          <img
            src={parttimes?.image_poster}
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
            <div className="cursor-pointer" onClick={() => router.back()}>
              <ChevronLeft className="h-8 w-8" />
            </div>

            <p className="text-2xl font-[500] mb-0">{parttimes?.title}</p>
          </div>
          <TagItem
            image={<Image src="/images/point.png" width={32} height={32} />}
            title={parttimes?.location}
          />
          <TagItem
            image={<Image src="/images/calendar.png" width={32} height={32} />}
            title={`${generateDate(
              parttimes?.date_start_work
            )} - ${generateDate(parttimes?.date_end_work)}`}
            subtitle={`${generateTime(
              parttimes?.date_start_work
            )}น. - ${generateTime(parttimes?.date_end_work)}น.`}
          />

          <TagItem
            image={<Image src="/images/user.png" width={32} height={32} />}
            title={`${parttimes?.people} คน`}
          />
          <TagItem
            image={<Image src="/images/coins.png" width={32} height={32} />}
            title={`${parttimes?.price} บาท`}
            subtitle="ต่อชั่วโมง"
          />
          {/* คุณสมบัติ */}
          <p className="text-md font-semibold  mt-4">คุณสมบัติ</p>
          <p className="text-md font-[500] ">{parttimes?.requirement}</p>

          <p className="text-md font-semibold  mt-4">รายละเอียด</p>
          <p className="text-md font-[500] ">{parttimes?.description}</p>

          {/* เวลาเข้างาน */}
          <p className="text-md font-semibold  mt-2">เวลาเข้างาน</p>
          <p className="text-md font-[500]">8:00AM - 16:00PM</p>

          <div className="flex justify-center items-center mt-8 mb-20">
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
