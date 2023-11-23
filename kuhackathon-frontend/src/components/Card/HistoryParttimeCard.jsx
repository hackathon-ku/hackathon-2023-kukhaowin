'use client'
import React from 'react'
import { Button} from 'flowbite-react'

const HistoryParttimeCard = ({
  status = 'success',
  bordered =false
}) => {
  // status success, pending, reject
  const renderStatus = () => {
    if (status === "success") {
      return (
           <div className="flex flex-col items-center justify-center">
        <img
          src="/images/check-mark.png"
          alt="check-mark"
          className="h-12 w-12"
        />
         <p className="text-sm text-gray-500">สำเร็จ</p>
        </div>
      );
    } else if (status === "pending") {
      return (
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/sand-clock.png"
            alt="pending"
            className="h-12 w-12"
          />
          <p className="text-sm text-gray-500">
            รอตรวจสอบ
          </p>
        </div>
      );
    } else if (status === "working") {
      return (
        <div className="flex flex-col items-center justify-center">
          <img src="/images/suitcase.png" alt="pending" className="h-12 w-12" />
          <p className="text-sm text-gray-500">
            ได้งาน
          </p>
        </div>
      );
    } else if (status === "reject") {
      return (
        <div className="flex flex-col items-center justify-center">
          <img src="/images/rejected.png" alt="pending" className="h-12 w-12" />
          <p className="text-sm text-gray-500">
            ไม่ผ่าน
          </p>
        </div>
      );
    }else {
      return null
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-white py-3 w-full mt-2 rounded-lg px-4 ${
      bordered ?'border-2 border-neutral-200':''
    }
    `}>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start justify-center ml-4">
          <p className="text-md font-bold">พนักงานเกษตรแฟร์ ปี 2564</p>
          <p className="text-sm">ทำแบบสำรวจความพึงพอใจงานเกษตรแฟร์</p>
          <p className="text-sm text-red-500">24 มิ.ย. 2564</p>
        </div>
        {renderStatus()}
      </div>
      {status === "working" && (
      <>
        <hr className="w-full my-2" />
        <div className="flex justify-start items-center gap-2 w-full ps-4">
          <Button size="sm" outline gradientDuoTone="pinkToOrange">
            ช่องทางการติดต่อ
          </Button>
          <Button size="sm" outline gradientDuoTone="pinkToOrange">
            รายละเอียดงาน
          </Button>
        </div>
      </>
      )}
    </div>
  );
}

export default HistoryParttimeCard