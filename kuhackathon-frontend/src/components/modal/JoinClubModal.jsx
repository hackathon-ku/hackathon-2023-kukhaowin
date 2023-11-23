"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Modal,
  TextInput,
  Textarea,
  Checkbox,
  Label,
  Button,
} from "flowbite-react";

function JoinClubModal({ isOpen, defaultValue, onClose, product, onSuccess }) {
  const [isValidateForm, setIsValidateForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsValidateForm(defaultValue);
  }, [defaultValue]);

  return (
    <Modal
      position="center"
      style={{
        paddingTop: "10vh",
      }}
      size="sm"
      show={isOpen}
      onClose={() => onClose(false)}
    >
      <Modal.Header>KU startup club</Modal.Header>

      <Modal.Body>
        {isValidateForm ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-bold mt-2">กลุ่มไลน์ชมรม</p>
            <Image
              src="/images/qrcode.jpg"
              alt="buy"
              width={130}
              height={130}
            />
            <p className="text-sm mt-2">or</p>
            <Button
              gradientDuoTone="cyanToBlue"
              onClick={() => {
                router.push(`/connect/chat?backPath=/connect/club/detail`);
              }}
            >
              แชทคนในชมรม
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              {/* Product Name */}
              <div className="mb-2 block">
                <Label
                  htmlFor="productName"
                  value="ทำไมถึงอยากเข้าร่วมชมรมนี้"
                />
              </div>
              <Textarea placeholder="กรอกรายละเอียด" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="productDesc" value="ความสามารถเฉพาะ" />
              </div>
              <Textarea placeholder="กรอกรายละเอียด" required />
            </div>

            <div>
              {/* Product Price */}
              <div className="mb-2 block">
                <Label htmlFor="productPrice" value="ทำไมเราควรเลือกคุณ" />
              </div>
              <Textarea placeholder="กรอกรายละเอียด" required />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {isValidateForm ? (
          <div className="flex justify-end w-full ">
            <Button outline color="success" onClick={() => onClose(false)}>
              ปิด
            </Button>
          </div>
        ) : (
          <div className="flex justify-between w-full ">
            <Button outline color="success" onClick={() => onClose(false)}>
              ยกเลิก
            </Button>
            <Button
              gradientDuoTone="greenToBlue"
              onClick={() => {
                onClose(false);
                onSuccess();
              }}
            >
              ส่งคำขอเข้าร่วม
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default JoinClubModal;
