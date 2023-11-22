'use client'

import React from "react"
import styled from "styled-components"
import Image from 'next/image'

//comoponet
import Text from "@/components/Text/Text"
import NisitCard from "@/components/NisitCard/NisitCard"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #197060;
  height: 100vh;
  width: 100vw;
`


const page = () => {
  return (
    <Container>
      <div className="flex justify-between m-4 w-full px-4">
        <Image src='/images/ku.svg' width={50} height={50} />
        <div className="flex items-center">
          <Image src='/images/nisit.svg' width={30} height={30} />
          <Text type="caption" color="white" className="ml-2">นาย ธนพล แก้วมณี</Text>
          </div>
      </div>
      <div>
        <NisitCard
          nisitId="61130500221"
          nisitName="นาย ธนพล แก้วมณี"
          nisitFaculty="วิศวกรรมศาสตร์"
          nisitMajor="วิศวกรรมคอมพิวเตอร์"
          nisitAdvisor="ผศ.ดร. สุธีรา ภู่เจริญ"
        />
      </div>
      
    </Container>
  )
}

export default page