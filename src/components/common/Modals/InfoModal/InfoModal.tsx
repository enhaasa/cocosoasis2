type Props = {
    content: {
        header: string | JSX.Element;
        underTitle: any;
        body: any;
        footer?: any;
        image?: string;
    }
}

function InfoModal(props: Props) {
    const {
        header,
        underTitle,
        body,
        footer,
        image
    } = props.content;

    return (
        <div className="infoModal">

            {image &&
                <div className="image">
                    <a href={image} rel='noreferrer' target="_blank">
                        <img src={image} alt=''/>
                    </a>
                    
                </div>
            }

            <div className="info">
                <div className="header">
                        {header}
                </div>

                <div className="underTitle">
                    {underTitle}
                    <div className="divider" />
                </div>

                <div className='wrapper'>

                    <div className="body">
                        
                        {body}
                    </div>
                
                </div>
                <div className="footer">
                    <div className="divider" />
                    {footer && footer}
                </div>
    
            </div>
        </div>
    );
}

export default InfoModal;