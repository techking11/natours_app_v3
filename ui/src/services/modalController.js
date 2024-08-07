export const ModalClose = ({ modalContainer }) => {
  modalContainer?.classList.add('hidden');
}

export const ModalOpen = ({ modalContainer }) => {
  modalContainer?.classList.remove('hidden');
}