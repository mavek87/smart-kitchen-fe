import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    title: string;
    content: React.ReactNode;
    isModalOpen?: boolean;
    onCloseModal?: () => void;
    confirmButtonName?: string;
    onConfirmModal?: (() => void) | undefined;
    cancelButtonName?: string;
    onCancelModal?: (() => void) | undefined;
    modalSize?: "small" | "medium" | "large" | "xlarge";
}

const modalSizeSmall = "max-w-sm"
const modalSizeMedium = "max-w-md"
const modalSizeLarge = "max-w-lg"
const modalSizeExtraLarge = "max-w-6xl"

export default function Modal({
                                  title,
                                  content,
                                  isModalOpen = false,
                                  onCloseModal = () => {
                                  },
                                  confirmButtonName = "Confirm",
                                  onConfirmModal = undefined,
                                  cancelButtonName = "Cancel",
                                  onCancelModal = undefined,
                                  modalSize
                              }: ModalProps) {
    let size;
    switch (modalSize) {
        case "small":
            size = modalSizeSmall;
            break;
        case "medium":
            size = modalSizeMedium;
            break;
        case "large":
            size = modalSizeLarge;
            break;
        case "xlarge":
            size = modalSizeExtraLarge;
            break;
        default:
            size = modalSizeSmall;
            break;
    }

    const modalContent = (
        <article className={size}>
            <header>
                <button aria-label="Close" rel="prev" onClick={onCloseModal}/>
                <h4>{title}</h4>
            </header>
            <p className={"flex justify-center"}>{content}</p>
            {
                (onConfirmModal || onCancelModal) &&
                <footer>
                    {onConfirmModal &&
                        <button className="secondary" onClick={onCancelModal}>{cancelButtonName}</button>}
                    {onCancelModal && <button onClick={onConfirmModal}>{confirmButtonName}</button>}
                </footer>
            }
        </article>
    );

    const dialog = isModalOpen
        ? <dialog open>{modalContent}</dialog>
        : null;

    return ReactDOM.createPortal(dialog, document.getElementById("modal-root")!);
}