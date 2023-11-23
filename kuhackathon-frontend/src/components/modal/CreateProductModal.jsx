'use client';
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  TextInput,
  Textarea,
  Checkbox,
  Label,
  Button,
} from "flowbite-react";

const CreateProductModal = ({ isOpen, onCloseModal, onCreateProduct }) => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isFree, setIsFree] = useState(false);

  const handleCreateProduct = () => {
    onCreateProduct({
      name: productName,
      description: productDesc,
      price: productPrice,
      isFree: isFree,
    });

    // Reset the form after submission
    setProductName("");
    setProductDesc("");
    setProductPrice("");
    setIsFree(false);

    // Close the modal
    onCloseModal();
  };

  return (
    <Modal
      position="center"
      style={{
        paddingTop: "10vh",
      }}
      show={isOpen}
      size="md"
      onClose={onCloseModal}
      popup
    >
      <Modal.Header>
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">
          สร้างรายการสินค้า
        </h2>
      </Modal.Header>

      {/* Modal Body containing the form */}
      <Modal.Body>
        <div className="space-y-3">
          <div>
            {/* Product Name */}
            <div className="mb-2 block">
              <Label htmlFor="productName" value="ชื่อสินค้า" />
            </div>
            <TextInput
              id="productName"
              placeholder="กรอกชื่อสินค้า"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="productDesc" value="รายละเอียดสินค้า" />
            </div>
            <Textarea
              id="productDesc"
              placeholder="กรอกรายละเอียดสินค้า"
              value={productDesc}
              onChange={(event) => setProductDesc(event.target.value)}
              required
            />
          </div>

          <div>
            {/* Product Price */}
            <div className="mb-2 block">
              <Label htmlFor="productPrice" value="ราคา" />
            </div>
            <TextInput
              id="productPrice"
              placeholder="กรอกราคา"
              type="number"
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Checkbox for Free Product */}
            <Checkbox
              id="isFree"
              checked={isFree}
              onChange={() => setIsFree(!isFree)}
            />
            <Label htmlFor="isFree">Is Free</Label>
          </div>

          {/* Buttons to submit the form or cancel */}
          <div className="w-full flex justify-center space-x-2 mt-4">
            <Button
              outline
              gradientDuoTone="greenToBlue"
              onClick={onCloseModal}
              className="w-36"
            >
              ยกเลิก
            </Button>
            <Button gradientMonochrome="success" onClick={handleCreateProduct}>
              สร้างรายการสินค้า
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

CreateProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onCreateProduct: PropTypes.func.isRequired,
};

CreateProductModal.defaultProps = {
    isOpen: false,
    onCloseModal: () => {},
    onCreateProduct: () => {},
    };



export default CreateProductModal;
