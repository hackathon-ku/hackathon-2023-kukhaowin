"use client";

import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

//component
import ParttimeCard from "@/components/Card/ParttimeCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import HistoryParttimeCard from "@/components/Card/HistoryParttimeCard";

//icon
import { Briefcase } from "lucide-react";
import { User } from "lucide-react";

const page = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [parttimes, setParttimes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [parttimeShow, setParttimeShow] = useState([]);

  useEffect(() => {
  trackPromise(
      axios.get(
        "http://hackathon.django.ratchaphon1412.co/api/kupartime/post/"
      ).then((parttimes) => {
      setParttimes(parttimes.data.data);
      setParttimeShow(parttimes.data.data);
    })
  )
  }, []);

  const searchParttime = (value) => {
    const result = parttimes.filter((parttime) => {
      return parttime.title.toLowerCase().includes(value.toLowerCase());
    });
    setParttimeShow(result);
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        height: "100%",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#EDF0F7",
        marginBottom: "48px",
      }}
    >
      <div className="flex justify-between ">
        <div className="flex items-center ">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/connect")}
          >
            <ChevronLeft className="h-8 w-8" />
          </div>
          <p className="text-2xl font-bold text-[#197060]">Part-time</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            gradientDuoTone="tealToLime"
            className="ml-auto"
            onClick={() => {
              router.push("/connect/parttime/profile");
            }}
          >
            <User className="h-4 w-4" />
            <p className="text-xs font-bold">Profile</p>
          </Button>
          <Button
            size="sm"
            gradientDuoTone="tealToLime"
            className="ml-auto"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Briefcase className="h-4 w-4" />
            <p className="text-xs font-bold">Working</p>
          </Button>
        </div>
      </div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={(value) => {
          setSearchValue(value);
          searchParttime(value);
        }}
        haveFilter={false}
      />
      {parttimeShow.length === 0 ? (
        <div
          className="flex items-center justify-center  bg-white rounded-lg"
          style={{
            height: "calc(100vh - 326px)",
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/magnifying-glass.png"
              alt="empty"
              className="h-48 w-48 object-contain"
            />
            <p className="text-2xl font-bold">ไม่พบงาน</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-2 gap-4">
          {parttimeShow.map((parttime) => (
            <React.Fragment key={parttime.id}>
              <ParttimeCard data={parttime} />
            </React.Fragment>
          ))}
        </div>
      )}
      <Modal
        show={openModal}
        size="md"
        style={{
          paddingTop: "10vh",
        }}
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header>งานของฉัน</Modal.Header>
        <Modal.Body>
          <div
            className="flex flex-col gap-2"
            style={{
              maxHeight: "50vh",
              overflowY: "scroll",
            }}
          >
            <HistoryParttimeCard status="working" bordered={true} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center gap-4 w-full">
            <Button color="gray" onClick={() => setOpenModal(false)}>
              ปิด
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default page;
