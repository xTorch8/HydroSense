import ModalType from "../types/components/ModalType";

const Modal = (props: ModalType) => {
	return (
        <div className="bg-darkblue w-1/2 block mx-auto">
            <div className="bg-navy flex flex-row justify-between">
                <h1 className="text-white"> HydroSense </h1>
                <p className="text-white" onClick={props.onClose}> X </p>
            </div>
            <div>
                <div>
                    <img/>
                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default Modal;
