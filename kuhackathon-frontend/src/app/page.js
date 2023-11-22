import Image from 'next/image'

import NisitCard from '@/components/NisitCard/NisitCard'
import Paper from '@/components/Paper/Paper'
import MenuItem from '@/components/MenuItem/MenuItem'

export default function Home() {
  return (
    <div>
      <NisitCard
        nisitId="61130500221"
        nisitName="นาย ธนพล แก้วมณี"
        nisitFaculty="วิศวกรรมศาสตร์"
        nisitMajor="วิศวกรรมคอมพิวเตอร์"
        nisitAdvisor="ผศ.ดร. สุธีรา ภู่เจริญ"
         />
      <Paper
       />
      <MenuItem 
        menuName="ข้อมูลส่วนตัว"
        menuIcon="/images/nisit.svg"
        menuLink="/profile"
        />
    </div>
  )
}
