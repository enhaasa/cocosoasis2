import closeIcon from './../../icons/close2-white.png';

type Props = {
    handleClose: () => void;
}

function Modal(props: Props & { children?: React.ReactNode}) {
    const { handleClose } = props;

    return (
        <div className="modal">
            <button className="background" onClick={() => handleClose()}/>
            
            <div className="content">
                <div className="titleBar">
                    <button className="closeButton" onClick={() => handleClose()}>
                        <img alt="Close" src={closeIcon} />
                    </button>
                </div>
                
                {props.children}
            </div>
        </div>
    )
}

export default Modal;