"use client";

import React from "react";
import { Button, Modal } from "flowbite-react";
import { Progress } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react";


const GradeModal = ({
    openModal,
    setOpenModal,
}) => {
    const mockData = [{
        id: 1,
        name: "กลุ่มสาระอยู่ดีมีสุข",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 2,
        name: "วิชาแกน",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 3,
        name: "วิชาเฉพาะเลือก",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 4,
        name: "วิชาเฉพาะด้าน",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 5,
        name: "วิชาเลือกเสรี",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 6,
        name: "กลุ่มสาระภาษากับการสื่อสาร",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    },{
        id: 7,
        name: "กลุ่มสาระสุนทรียศาสตร์",
        credit: 20,
        creditPass: 12,
        creditFail: 8,
    }
]
        
  return (
    <Modal style={{
        paddingTop: "20px",
    }} show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>
        <p className="text-lg font-semibold">
            หน่วยกิต
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-2 flex flex-col">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between">
              <p className="text-md font-semibold">วิชาศึกษาทั่วไป</p>
              <p className="text-xs ">ทั้งหมด 20 หน่วยกิต</p>
            </div>
            <div className="py-1">
              <Progress progress={60} color="green" />
              <div className="flex justify-end">
                <p className="text-xs text-gray-700">12/20</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between">
              <p className="text-md font-semibold">วิชาเฉพาะ</p>
              <p className="text-xs ">ทั้งหมด 19 หน่วยกิต</p>
            </div>
            <div className="py-1">
              <Progress progress={90} color="green" />
              <div className="flex justify-end">
                <p className="text-xs text-gray-700">18/20</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between">
              <p className="text-md font-semibold">วิชาเลือกเสรี</p>
              <p className="text-xs ">ทั้งหมด 20 หน่วยกิต</p>
            </div>
            <div className="py-1">
              <Progress progress={20} color="green" />
              <div className="flex justify-end">
                <p className="text-xs text-gray-700">4/20</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr 1fr 1fr",
              }}
            >
              <p className="text-sm font-bold">ประเภทกลุ่มสาระ</p>
              <p className="text-sm font-bold">ขั้นต่ำ</p>
              <p className="text-sm font-bold">เรียนแล้ว</p>
              <p className="text-sm font-bold">คงเหลือ</p>
            </div>
            {mockData.map((data) => (
              <div
                key={data.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4fr 1fr 1fr 1fr",
                }}
              >
                <p className="text-sm ">{data.name}</p>
                <p className="text-sm ">{data.credit}</p>
                <p className="text-sm ">{data.creditPass}</p>
                <p className="text-sm ">{data.creditFail}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-center  w-full">
          <Button color="gray" onClick={() => setOpenModal(false)}>
            ปิด
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default GradeModal;
