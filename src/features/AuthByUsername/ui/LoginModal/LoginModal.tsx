import { Suspense } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
// import LoginForm from "../LoginForm/LoginForm";
import { LoginFormAsync } from "../LoginForm/LoginFormAsync";
import { Loader } from "@/shared/ui/Loader/ui/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className = "", isOpen, onClose } = props;

    return (
        <Modal lazy className={className} isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
