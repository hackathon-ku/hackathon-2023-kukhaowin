"use client";
import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

//components
import EventCard from "@/components/Card/EventCard";
import DateDay from "@/components/DateDay/DateDay";

const page = () => {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const eventFetch = await axios.get(
        "http://hackathon.django.ratchaphon1412.co/api/kuconnect/event/"
      );
      setEvents(eventFetch.data.event);
    };
    fetch();
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        height: "100%",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#EDF0F7",
      }}
    >
      <div className="flex items-center ">
        <div className="cursor-pointer" onClick={() => router.push("/connect")}>
          <ChevronLeft className="h-8 w-8" />
        </div>
        <p className="text-2xl font-bold text-[#197060]">Events</p>
      </div>
      <DateDay />
      <div className="flex items-center py-4 bg-white p-4 rounded-md my-2">
        <TextInput placeholder="Search" className="mr-4 w-full" />
        <Button color="success">Search</Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-md font-semibold text-gray-500 ps-2">ใกล้จะถึง</p>
          <EventCard data={events?.[0]} />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-md font-semibold text-gray-500 ps-2">ทั้งหมด</p>
          {events?.map((event, index) => {
            if (index === 0) return;
            return (
              <React.Fragment key={index}>
                <EventCard data={event} key={event.id} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
