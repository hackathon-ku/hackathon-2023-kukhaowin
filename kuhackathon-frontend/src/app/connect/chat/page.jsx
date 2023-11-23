"use client";
import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar } from "flowbite-react";
import { useSearchParams } from "next/navigation";




const ChatMessage = ({ text, sender, timestamp }) => (
  <div
    className={`flex ${
      sender === "user" ? "justify-end" : "justify-start"
    } mb-2 items-center`}
  >
    <div
      className={`flex items-center space-x-2 `}
    >
      {sender !== "user" && <Avatar size="sm" rounded />}
      <div
        className={`p-2 ml-2 rounded-lg ${
          sender === "user"
            ? "bg-[#197060] text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        <p className="text-sm">{text}</p>
      </div>
      {sender === "user" && <Avatar size="sm" rounded />}
    </div>
  </div>
);

const mockMessages = [
   
]

const Page = (props) => {
  const router = useRouter();
   const searchParams = useSearchParams();

  
  const [messages, setMessages] = useState([...mockMessages]);
  const [newMessage, setNewMessage] = useState("");

    const backPath = searchParams.get("backPath");




 


  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const newMessageObj = {
      text: newMessage,
      sender: "user", // Assuming the user is always the sender for simplicity
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    setNewMessage("");
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: "48px",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className="cursor-pointer" onClick={() => router.push(backPath)}>
            <ChevronLeft className="h-8 w-8" />
          </div>
          <p className="text-xl font-bold text-[#197060]">kuHackathon 2023</p>
        </div>
        <div className="flex items-center">
          <Image src="/images/user.png" alt="user" width={30} height={30} />
          <p className="text-md font-bold text-[#197060] ml-2">2</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="h-[67vh] flex flex-col justify-end">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            sender={message.sender}
            text={message.text}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <div className="flex items-center mt-4">
        <TextInput
          className="w-full"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          gradientMonochrome="success"
          className="ml-2"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Page;
