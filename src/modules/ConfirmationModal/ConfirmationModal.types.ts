type OnClick = () => void | Promise<void>;
export interface ModalFunctions {
    onCancel?: OnClick;
    onXClick?: OnClick;
    onConfirm?: OnClick;
    nameModal?: string;
}

export interface ConfirmationModalProps extends ModalFunctions {
    name?: string;
    title: string;
    description: string;

    cancel?: string;

    confirm: string;
    disableConfirm?: boolean;
}
