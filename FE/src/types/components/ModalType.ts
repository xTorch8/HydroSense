type ModalType = {
	onConfirm?: () => {};
	onClose?: () => {};
	icon: "clean" | "dirty" | "success";
	message: string;
};

export default ModalType;