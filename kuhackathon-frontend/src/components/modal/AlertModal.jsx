import React from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const AlertModal = ({ isOpen, onClose, content, confirmAction, cancelAction }) => (
  <Modal show={isOpen} size="md" onClose={onClose} popup>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        {content}
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={confirmAction}>
            Confirm
          </Button>
          <Button color="gray" onClick={cancelAction}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

export default AlertModal;