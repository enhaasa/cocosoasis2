import InfoModal from "../common/Modals/InfoModal/InfoModal";

type Props = {
    handleModal: (content: any) => void;
    icon?: string;
    image?: string;
    header: string;
    footer?: JSX.Element | string;
    body: JSX.Element | string;
    underTitle: string;
    type?: string;
    available: boolean;
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
        type,
        available,
    } = props;
    
    return (
        <button 
            draggable={false} 
            className={`serviceItem ${type && type} ${!available && 'unavailable'}`}
            disabled={!available} 
            onClick={() => handleModal(
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
                !available &&
                <>
                    <div className='unavailable-overlay' />
                    <div className='unavailable-text'>Currently unavailable</div>
                </>
            }

            {
            <div className="column">
                <img className="icon" src={icon} alt='Service Icon'/>
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