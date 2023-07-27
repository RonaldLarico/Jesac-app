import React, { MouseEvent } from 'react'

import { FaWindowClose } from 'react-icons/fa'

interface DesignWebModalProps {
  visible: boolean;
  onClose: () => void;
}

const StoreModal: React.FC<DesignWebModalProps> = ({visible, onClose}) => {

  const handleOnClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === 'container') onClose();
  };

  if(!visible) return null;

  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-gray-50 dark:bg-gray-800 p-2 rounded'>
        Modal
      <button onClick={onClose}>
        <FaWindowClose />
      </button>
      </div>
    </div>
  )
}

export default StoreModal