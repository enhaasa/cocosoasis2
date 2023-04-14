import InfoModal from "../../common/ModalTemplates/InfoModal";



type Props = {
    handleModal: (content: any) => void;
    icon?: string;
    image?: string;
    header: string;
    footer?: JSX.Element | string;
    body: JSX.Element | string;
    underTitle: string;
    type?: string;
}

function ServiceItem(props:Props) {
    const {
        handleModal,
        header,
        body,
        icon,
        image,
        footer,
        underTitle,
        type
    } = props;


    return (
        
        <button draggable={false} className={`serviceItem ${type && type}`} onClick={() => handleModal(
            <InfoModal 
                content={{
                    header: header,
                    underTitle: underTitle,
                    body: body,
                    footer: footer,
                    image: image
                }}
            />
        )}>

            {
            <div className="column">
                <img className="icon" src={icon} />
            </div>
            }

            <div className="column">
                <div className="header">
                    {header}
                </div>

                <div className="underTitle">
                    {underTitle}
                </div>
            </div>
            
        </button>
    );
}

export default ServiceItem;