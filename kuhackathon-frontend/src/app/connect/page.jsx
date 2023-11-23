'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "flowbite-react";

//components
import ConnectCard from '@/components/Card/ConnectCard'


const page = () => {
  const router = useRouter()
  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#EDF0F7",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-primary  text-4xl font-bold mb-0">
          <span className="text-green-600 mr-2">KU</span>
          Connect
        </p>
        <Button
          size="sm"
          outline
          gradientDuoTone="greenToBlue"
          onClick={() => router.push("/home")}
        >
          ย้อนกลับ
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "12px",
          width: "100%",
          marginTop: "24px",
        }}
      >
        <ConnectCard
          image="/images/part-time.png"
          title="Part-time"
          link="/connect/parttime"
        />
        <ConnectCard
          image="/images/market.png"
          title="Marketplace"
          link="/connect/marketplace"
        />
        <ConnectCard
          image="/images/event.png"
          title="Event"
          link="/connect/event"
        />
        <ConnectCard
          image="/images/celebration.png"
          title="Party"
          link="/connect/party"
        />
        <ConnectCard
          image="/images/home.png"
          title="Clubs"
          link="/connect/club"
        />
      </div>
    </div>
  );
}

export default page