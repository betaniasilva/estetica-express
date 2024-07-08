import { useState } from "react";

const useModal = () => {
  const [modalState, setModalState] = useState({ id: null, type: null });

  const openModal = (id, type) => setModalState({ id, type });
  const closeModal = () => setModalState({ id: null, type: null });

  return {
    modalState,
    openModal,
    closeModal,
  };
};

export default useModal;
