'use client'

import React,{useState} from "react";
import Image from 'next/image';
import NisitCard from "@/components/NisitCard/NisitCard";
import Paper from "@/components/Paper/Paper";
import MenuItem from "@/components/MenuItem/MenuItem";
import NewCard from "@/components/Card/NewCard";
import FooterBar from "@/components/FooterBar/FooterBar";
import Navbar from "@/components/Navbar/Navbar";
import GradeModal from "@/components/modal/GradeModal";
import { useRouter } from "next/router";



const ContainerClasses =
  "flex flex-col items-center bg-[#197060] h-screen w-screen";

const PaperContainerClasses =
  "bg-white rounded-tl-2xl rounded-tr-2xl w-full h-full p-8 mt-4";

const FeatureHeaderClasses = "text-2xl font-bold";

const FeatureMenuContainerClasses = "flex gap-6 p-4";

const NewsHeaderClasses = "text-2xl font-bold";

const NewsContainerClasses = "flex flex-col gap-2";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))




  
  


  return (
    <div className={ContainerClasses}>
      <Navbar />
      <div className="w-full px-6">
        <NisitCard
          nisitId={user?.student_id}
          nisitName={user?.fullname}
          nisitFaculty={user?.faculty}
          nisitMajor={user?.major}
          nisitAdvisor={user?.advisor}
        />
      </div>
      <div className={PaperContainerClasses}>
        <p className={FeatureHeaderClasses}>Feature</p>
        <div className={FeatureMenuContainerClasses}>
         
         
          <MenuItem
            menuName="Ku Connect"
            menuIcon={<Image src='/images/connectMenu.svg' alt='connect menu' width={62} height={62} />}
            menuLink="/connect"
          />
          <MenuItem
            menuName="หน่วยกิต"
            menuIcon={<Image src='/images/dashboard.png' alt='connect menu' width={62} height={62} />}
            menuLink="/home"
            onClick={() => setOpenModal(true)}
          />
        </div>
        <p className={NewsHeaderClasses}>News</p>
        <div className={NewsContainerClasses}>
          <NewCard />
          <NewCard />
          <NewCard />
        </div>
        <FooterBar />
      </div>
      <GradeModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Page;
