"use client";
import React, { useState } from "react";
import { ChevronLeft, Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Button,
  Modal,
  TextInput,
  Checkbox,
  Label,
  Textarea,
} from "flowbite-react";

//component
import MarketplaceCard from "@/components/Card/MarketplaceCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import CreateProductModal from "@/components/modal/CreateProductModal";
import ProductDetailModal from "@/components/modal/ProductDetailModal";

const filterOptions = [
  { label: "จำหน่าย", value: 1 },
  { label: "ส่งต่อ", value: 2 },
  // Add more filter options as needed
];

const products = [
  {
    name: "เค้กช็อคโกแลต",
    isFree: false,
    price: 150,
    description:
      "เค้กช็อคโกแลตเนื้อนุ่มชุ่มฉ่ำ หอมกลิ่นโกโก้เข้มข้น โรยหน้าด้วยผงโกโก้แท้",
  },
  {
    name: "เค้กสตรอเบอร์รี่",
    isFree: false,
    price: 50,
    description:
      "เค้กสตรอเบอร์รี่เนื้อนุ่มละมุน หอมกลิ่นสตรอเบอร์รี่สดใหม่ ตกแต่งด้วยสตรอเบอร์รี่สด",
  },
  {
    name: "เค้กวนิลลา",
    isFree: false,
    price: 45,
    description:
      "เค้กวนิลลาเนื้อนุ่มฟู หอมกลิ่นวานิลลาอ่อนๆ ตกแต่งด้วยครีมวานิลลา",
  },
  {
    name: "เค้กมะม่วง",
    isFree: false,
    price: 40,
    description:
      "เค้กมะม่วงเนื้อนุ่มละมุน หอมกลิ่นมะม่วงน้ำดอกไม้ ตกแต่งด้วยเนื้อมะม่วงสุก",
  },
  {
    name: "เค้กส้ม",
    isFree: false,
    price: 55,
    description:
      "เค้กส้มเนื้อนุ่มชุ่มฉ่ำ หอมกลิ่นส้มยูซุ ตกแต่งด้วยส้มยูซุ confit",
  },
  {
    name: "ชุดนักศึกษา",
    isFree: true,
    price: 2000,
    description: "ชุดนักศึกษาสวยๆ แบรนด์ดัง สภาพ 90% ขนาด S",
  },
  {
    name: "ชุดพละ",
    isFree: true,
    price: 0,
    description: "ชุดพละสวยๆ ใช้งานได้ปกติ ขนาด S",
  },
];
const Page = () => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [isFree, setIsFree] = useState(true);
  const [productCardIsOpen, setProductCardIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const _renderCard = () => {
    if (isFree) {
      return products.filter((product) => product.isFree);
    } else {
      return products.filter((product) => !product.isFree);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 128px)",
        borderRadius: "24px 24px 0px 0px",
        padding: "24px",
        backgroundColor: "#EDF0F7",
        overflow: "hidden",
        marginBottom: "48px",
      }}
    >
      <div className="flex items-center ">
        <div className="cursor-pointer" onClick={() => router.push("/connect")}>
          <ChevronLeft className="h-8 w-8" />
        </div>
        <p className="text-2xl font-bold text-[#197060]">Marketplace</p>
      </div>
      <SearchBar
        filterOptions={filterOptions}
        filterValue={isFree ? 1 : 2}
        setFilterValue={(value) => {
          setIsFree(value !== 1);
        }}
        filterType='list'
      />
      <div className="flex justify-between items-center  mt-4">
        <div className="flex flex-col">
          <p className="text-xl font-bold text-gray-800">รายการสินค้า</p>
          <p className="text-xs font-bold text-gray-600">ทั้งหมด 4 รายการ</p>
        </div>
        <Button color="success" size="sm" onClick={() => setOpenModal(true)}>
          สร้างรายการสินค้า
        </Button>
      </div>

      <div
        className="mt-2 overflow-y-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "8px",
        }}
      >
        {_renderCard()?.map((product, index) => (
          <MarketplaceCard
            key={index}
            product={product}
            onClick={(value) => {
              setSelectProduct(value);
              setProductCardIsOpen(true);
            }}
          />
        ))}
      </div>
      <CreateProductModal
        isOpen={openModal}
        onCloseModal={() => setOpenModal(false)}
      />
      <ProductDetailModal
        isOpen={productCardIsOpen}
        onClose={(value) => setProductCardIsOpen(value)}
        product={{
          name: selectProduct?.name || "",
          image: "/images/cake.jpg",
          description: selectProduct?.description || "",
          price: selectProduct?.price || "",
          isFree: selectProduct?.isFree,
        }}
      />
    </div>
  );
};

export default Page;
