import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    title: string;
    content: React.ReactNode;
    isModalOpen?: boolean;
    onCloseModal?: () => void;
}

export default function Modal({
                                  title,
                                  content,
                                  isModalOpen = false,
                                  onCloseModal = () => {
                                  },
                              }: ModalProps) {
    const modalContent = (
        <article className={"max-w-6xl"}>
            <header>
                <button aria-label="Close" rel="prev" onClick={onCloseModal}/>
                <h4>{title}</h4>
            </header>
            <div className={"flex justify-center"}>{content}</div>
        </article>
    );

    const dialog = isModalOpen ? <dialog open>{modalContent}</dialog> : null;

    return ReactDOM.createPortal(dialog, document.getElementById("modal-root")!);
}