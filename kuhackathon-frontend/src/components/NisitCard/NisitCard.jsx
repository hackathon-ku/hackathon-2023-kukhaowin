"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import PropTypes from "prop-types";

//components
import Text from "../Text/Text";

const Container = styled.div`
  width: 100%;
  height: 157px;
  border-radius: 32px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
    padding: 16px;
`;

const NisitCard = ({
  nisitId,
  nisitName,
  nisitFaculty,
  nisitMajor,
  nisitAdvisor,
}) => {
  return (
    <Container>
      <div className="flex justify-center">
        <Image src={`/images/nisit.svg`} width={100} height={100} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Text type="header">{nisitId}</Text>
          <Text type="subHeader">{nisitName}</Text>
          <Text type="body">{nisitFaculty}</Text>
          <Text type="body">{nisitMajor}</Text>
        </div>
        <div className="flex ">
          <Text type="body">อาจารย์ที่ปรึกษา</Text>
          <Text type="body">{nisitAdvisor}</Text>
        </div>
      </div>
    </Container>
  );
};

NisitCard.propTypes = {
    nisitId: PropTypes.string,
    nisitName: PropTypes.string,
    nisitFaculty: PropTypes.string,
    nisitMajor: PropTypes.string,
    nisitAdvisor: PropTypes.string,
    };


export default NisitCard;


//examples use
{/* <NisitCard
    nisitId="61130500221"
    nisitName="นาย ธนพล แก้วมณี"
    nisitFaculty="วิศวกรรมศาสตร์"
    nisitMajor="วิศวกรรมคอมพิวเตอร์"
    nisitAdvisor="ผศ.ดร. สุธีรา ภู่เจริญ"
/>; */}