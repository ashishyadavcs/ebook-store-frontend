"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalWrapperStyle from "@/styles/modalwrapper.styled";
import Button from "@/components/ui/Button";

const ModalWrapper = ({
    isOpen,
    onClose,
    children,
    portalTarget = document.body,
    size,
    confirm,
}) => {
    if (!isOpen || !portalTarget) return null;

    const modalContent = (
        <ModalWrapperStyle size={size}>
            <div className="modal-content">
                <Button
                    type="default"
                    className="close-btn"
                    onClick={e => {
                        if (confirm) {
                            let isok = window.confirm(confirm);
                            isok && onClose(e);
                            return;
                        }
                        onClose(e);
                    }}
                >
                    &times;
                </Button>
                {children}
            </div>
        </ModalWrapperStyle>
    );

    return createPortal(modalContent, portalTarget);
};

export default ModalWrapper;
