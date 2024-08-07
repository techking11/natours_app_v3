interface modalContainerProps {
  modalContainer: HTMLElement,
}

export const ModalClose = ({ modalContainer }: modalContainerProps) => {
  modalContainer?.classList.add('hidden');
}

export const ModalOpen = ({ modalContainer }: modalContainerProps) => {
  modalContainer?.classList.remove('hidden');
}