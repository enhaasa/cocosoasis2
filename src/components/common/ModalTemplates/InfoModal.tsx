import { StaffItemType } from "../../../commonTypes";
import { getTimeSinceDate } from "../../../commonFunctions";
import { capitalizeWords } from "../../../commonFunctions"
import ReactHtmlParser from 'react-html-parser';
import sources from "../../../sources";

type Props = {
    content: {
        header: string | JSX.Element;
        underTitle: any;
        body: any;
        footer: any;
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
                <a href={image} target="_blank">
                    <img src={image} />
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

                <div className="body">
                    {body}
                </div>
                
                <div className="footer">
                    <div className="divider" />
                     {footer}
                </div>
            </div>
        </div>
    );
}

export default InfoModal;