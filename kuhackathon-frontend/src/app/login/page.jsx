'use client'

import React, { useState,useEffect } from "react";
import {Button} from 'flowbite-react'
import { useRouter } from "next/navigation";
import { AxiosConfig } from "@/services/AxiosConfig";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect( () => {
    const token = localStorage.getItem("token");
    if (token) {
      // router.push("/home");
    }
  }
  ,[])


  const handleLogin =  () => {
     axios.post(
      "http://hackathon.django.ratchaphon1412.co/api/user/login/",
      {
        email: username,
        password: password,
      }
    ).then((res) => {
        console.log(res.data);
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data));


       axios.get("http://hackathon.django.ratchaphon1412.co/api/user/me/",{
            headers: {
              Authorization: `Bearer ${res.data.access}`,
            },
          })
            .then((res) => {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              router.push("/home");
            })
            .catch((err) => {
              console.log(err);
            });
          
          // router.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
      <div className="px-8 rounded w-full ">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">KU LOGIN</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <Button
          color='success'
            onClick={handleLogin}
            className="w-full"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
