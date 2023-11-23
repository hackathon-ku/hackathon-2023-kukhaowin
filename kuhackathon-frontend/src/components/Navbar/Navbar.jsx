'use client'

import React from 'react'
import Image from 'next/image'
import { BellRing, LogOut } from "lucide-react";
import { useRouter } from 'next/navigation'


//components

const Navbar = () => {
  const router = useRouter()

  const clearToken = () => {
    localStorage.removeItem("token");
    router.push("/login");
  }
  return (
    <div className="flex justify-between py-2 w-full px-6" style={{}}>
      <Image src="/images/ku.svg" width={50} height={50} alt="logo ku" />
      <div className="flex items-center">
        <Image src="/images/nisit.svg" width={30} height={30} alt="profile" />
        <BellRing size={24} color="#fff" className="ml-2" />
        <LogOut
          size={24}
          color="#fff"
          className="ml-2"
          onClick={() => clearToken()}
        />
      </div>
    </div>
  );
}

export default Navbar