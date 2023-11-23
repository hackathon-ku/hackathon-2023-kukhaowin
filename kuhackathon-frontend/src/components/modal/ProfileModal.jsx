"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import {
  FaTransgender,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

//icon date
import { MdDateRange } from "react-icons/md";


const ProfileModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      position="center"
      style={{
        paddingTop: "10vh",
      }}
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="max-w-md mx-auto"
    >
      <Modal.Header>
        <div className="flex flex-col">
            <p className="text-xl font-bold">นาย สมชาย สมใจ</p>
            <p className="text-sm ">รหัสนักศึกษา : 6206123456</p>
            </div>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="flex flex-col items-start justify-center space-y-2">
            <p className="text-md font-bold ">ข้อมูลส่วนตัว</p>
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <FaTransgender />
              </span>
              เพศ : ชาย
            </p>
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <MdDateRange />
              </span>
              วันเกิด : 20/10/2540
            </p>
            {/* Add other information with icons */}
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <FaPhone />
              </span>
              เบอร์โทรศัพท์ :{" "}
              <a href="tel:0891234567" className="text-blue-500">
                089-123-4567
              </a>
            </p>
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <FaEnvelope />
              </span>
              อีเมล : sarawut@ku.th
            </p>
            {/* ... (other information with icons) */}
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <FaGraduationCap />
              </span>
              คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
            </p>
            {/*grade*/}
            <p className="text-sm flex items-center">
              <span className="mr-2">
                <FaGraduationCap />
              </span>
              เกรดเฉลี่ย : 3.68
            </p>
            <p className="text-md font-bold ">ความสามารถพิเศษ</p>
            <ui className="text-sm ">
              <li>การเขียนโปรแกรม</li>
              <li>การออกแบบเว็บไซต์</li>
              <li>การออกแบบแอปพลิเคชัน</li>
              <li>การออกแบบภาพประกอบ</li>
            </ui>
            <p className="text-md font-bold ">
                จุดประสงค์ในการทำงาน
            </p>
            <p className="text-sm">
                ต้องการฝึกฝนทักษะการทำงาน และเพื่อเพิ่มความสามารถในการทำงานในอนาคต
            </p>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
