"use client";

import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ProductDetailModal({ isOpen, onClose, product }) {
  const router = useRouter();
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    return () => {
      setIsBuy(false);
    };
  }, [isOpen]);

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
      <Modal.Header>รายละเอียดสินค้า</Modal.Header>
      <Modal.Body>
        {isBuy ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-bold mt-2">ติดต่อผู้ขาย</p>
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
                router.push(`/connect/chat?backPath=/connect/marketplace`);
              }}
            >
              แชทกับผู้ขาย
            </Button>
          </div>
        ) : (
          <>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={product?.image}
                alt={product?.name}
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-lg font-bold mt-2">{product?.name}</p>
                <p className="text-sm">{product?.description}</p>
              </div>
              {product?.isFree ? (
                <div
                  className="flex flex-col bg-yellow-400  text-white rounded-md px-3 py-1
       "
                >
                  <p className="text-lg font-bold ">Free</p>
                </div>
              ) : (
                <div
                  className="flex flex-col rounded-md px-2 py-1 border border-[#197060] text-[#197060] items-center justify-center "
                >
                  <p className="text-2xl font-bold mt-2">{product?.price}</p>
                  <p className="text-sm">บาท</p>
                </div>
              )}
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {isBuy ? (
          <div className="flex justify-end w-full ">
            <Button outline color="success" onClick={() => onClose(false)}>
              ปิด
            </Button>
          </div>
        ) : (
          <div className="flex justify-end w-full gap-4">
            <Button outline color="success" onClick={() => onClose(false)}>
              ยกเลิก
            </Button>
            <Button color="success" onClick={() => setIsBuy(true)}>
              สั่งสินค้า
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetailModal;
