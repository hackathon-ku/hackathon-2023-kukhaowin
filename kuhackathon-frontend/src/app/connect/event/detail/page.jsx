"use client";
import React,{useState,useEffect} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from "react-icons/hi";
import { ChevronLeft } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";



//components
import TagItem from "@/components/TagItem/TagItem";

const Page = () => {
  const searchParams = useSearchParams();
  const [isJoin, setIsJoin] = useState(false);
  const router = useRouter();

  const [event ,setEvent] = useState({});

  useEffect(() => {
    if (searchParams.get("id") === null) {
      router.push("/connect/event");
    }
    const token = JSON.parse(localStorage.getItem("token"));


    if (!token) {
      router.push("/login");
    }
    const fetch = async () => {
      const eventFetch = await axios.get(
        "http://hackathon.django.ratchaphon1412.co/api/kuconnect/event/" +
          searchParams.get("id"),
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      );
      setEvent(eventFetch?.data.event);
      setIsJoin(eventFetch?.data.event.join);
    };
    fetch();
  }, []);


  function onClickJoin (title) {

    toast.success(title, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      style:{
        top: "80px",
        left: "100px",
      }
   

    });
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
    const year = (parseInt(dateSplit[0]) + 543) % 100;
    const month = parseInt(dateSplit[1]);
    const day = parseInt(dateSplit[2]);

    return `${day} ${getMonth(month)} ${year}`;
  }


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full  h-[380px] bg-black">
        <Carousel>
          {event?.event_image?.map((item) => (
            <img
              key={item?.id}
              src={item?.image}
              alt="event detail1"
              className="h-100"
            />
          ))}
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
        <div
          className=" w-[72px] h-[72px] rounded-full flex justify-center items-center cursor-pointer"
          style={{
            backgroundColor: "#EDF0F7",
            position: "absolute",
            top: "-36px",
            right: "24px",
            zIndex: 99,
            padding: "16px",
          }}
          onClick={()=>{
            onClickJoin("เพิ่มในรายการโปรดสำเร็จ")
          }}
        >
          <Image
            src="/images/heart.png"
            alt="event logo"
            width={36}
            height={36}
          />
        </div>
        <div className="px-4 pt-8 pb-2 relative h-full">
          <div className="flex items-center mb-4 ">
            <div className="cursor-pointer" onClick={() => router.back()}>
              <ChevronLeft className="h-8 w-8" />
            </div>

            <p className="text-2xl font-[500] mb-0">{event?.name}</p>
          </div>
          <TagItem
            image={<Image src="/images/point.png" width={32} height={32} />}
            title="Kasetsart University"
            subtitle="50 Ngam Wong Wan Rd, Lat Yao, Chatuchak, Bangkok"
          />
          <TagItem
            image={<Image src="/images/calendar.png" width={32} height={32} />}
            title={`${formatDate(event?.date_start)} - ${formatDate(
              event?.date_end
            )}`}
          />
          <div className="flex items-center justify-between">
            <TagItem
              image={
                <Image
                  src="/images/scientDepartment.svg"
                  width={32}
                  height={32}
                />
              }
              title="สโมสรนิสิตคณะวิทยาศาสตร์"
              subtitle="Organizer"
            />
            <Button size="sm" outline gradientMonochrome="cyan" 
            onClick={() => onClickJoin("ติดตามกิจกรรมสำเร็จ")}
            >
              Follow
            </Button>
          </div>

          <TagItem
            image={<Image src="/images/user.png" width={32} height={32} />}
            title={`${
              event?.current_student < 0 ? 0 : event?.current_student
            } / ${event?.student_limit}`}
            subtitle="เข้าร่วมแล้ว"
          />
          <p className="text-md font-semibold  mt-4">รายละเอียด</p>
          <p className="text-md font-[500] mt-2">{event?.description}</p>

          <div
            className="flex justify-center items-center mt-8 mb-20"
        
          >
            <Button
              size="lg"
              gradientDuoTone="greenToBlue"
              style={{
                width: "70vw",
              }}
              onClick={() =>{
                 setIsJoin(true);
                 onClickJoin("เข้าร่วมกิจกรรมสำเร็จ")
                }}
              disabled={isJoin}
            >
              เข้าร่วมกิจกรรม
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
