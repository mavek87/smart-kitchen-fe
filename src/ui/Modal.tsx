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
    modalWidthSize?: "sm" | "md" | "lg" | "xl" | "6xl";
}

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
                                  modalWidthSize = "sm"
                              }: ModalProps) {
    const modalContent = (
        <article className={`max-w-${modalWidthSize}`}>
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