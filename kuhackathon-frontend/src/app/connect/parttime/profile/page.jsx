"use client";
import React, { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";

//components
import HistoryParttimeCard from "@/components/Card/HistoryParttimeCard";
import ProfileModal from "@/components/modal/ProfileModal";


const Page = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);






  return (
    <div className="flex flex-col h-screen bg-gray-100 mt-24">
      <div
        style={{
          marginTop: "-8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/user.png"
          alt="user"
          width={150}
          height={150}
          className="rounded-full border-8 border-white"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold mt-1">
          นายศราวุธ อินพล
        </p>
        <p className="text-sm ">รหัสนักศึกษา : 6206123456</p>
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <div
          style={{
            marginTop: "1vh",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr  1fr 1fr",
            borderRadius: "16px",
            padding: "8px 16px",
          }}
          className="border-t-2 border-2 border-gray-300 bg-white"
        >
          <div className="flex flex-col items-center justify-center border-r-2">
            <p className="text-sm mt-1">การทำงาน</p>
            <p className="text-2xl font-bold mt-1">10 ชม.</p>
          </div>
          <div className="flex flex-col items-center justify-center border-r-2">
            <p className="text-sm  mt-1">การอบรม</p>
            <p className="text-2xl font-bold mt-1">8 ชม.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm mt-1">เกรด</p>
            <p className="text-2xl font-bold mt-1">3.68</p>
          </div>
        </div>

        <div
          className="flex items-center justify-start bg-white h-24 w-full mt-2 rounded-lg px-8 cursor-pointer"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src="/images/education.png" alt="qr" className="h-12 w-12" />
          <div className="flex flex-col items-start justify-center ml-4">
            <p className="text-md font-bold">ข้อมูลประวัตินิสิต</p>
            <p className="text-sm">
              รายละเอียดข้อมูลประวัตินิสิต ข้อมูลการศึกษา
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <p className="text-md font-bold mt-4 w-full">ประวัติ</p>
          <Button
            size="sm"
            style={{
              width: "200px",
            }}
            outline
            gradientDuoTone="pinkToOrange"
            onClick={() => {
              setAlertModal(true);
            }}
          >
            ดาวน์โหลดประวัติ
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-1">
          <HistoryParttimeCard status="pending" />
          <HistoryParttimeCard status="working" />
          <HistoryParttimeCard status="success" />
          <HistoryParttimeCard status="reject" />
          <div className="flex justify-center items-center w-full mt-4">
            <Button
              size="sm"
              style={{
                width: "200px",
                marginBottom: "10vh",
              }}
              color="gray"
              onClick={() => {
               router.push("/connect/parttime");
              }}
            >
              ย้อนกลับ
            </Button>
          </div>
        </div>
      </div>
      <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
      <Modal
        show={alertModal}
        size="md"
        style={{
          paddingTop: "15vh",
        }}
        onClose={() => setAlertModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              อยู่ในระหว่างการพัฒนา
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => setAlertModal(false)}>
                ปิด
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
     
    </div>
  );
};

export default Page;
