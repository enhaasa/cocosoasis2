import { StaffItemType } from "./../../../commonTypes";
import { getTimeSinceDate } from "../../../commonFunctions";
import { capitalizeWords } from "../../../commonFunctions"
import ReactHtmlParser from 'react-html-parser';
import sources from "../../../sources";

type Props = {
    item: StaffItemType;
    handleClose: () => void;
}

function StaffModal(props: Props) {
    const {
        name,
        positions,
        bio,
        hiredDate,
    } = props.item;

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    const cdn = sources.cdn + "/characters/";
    const imgFormat = ".webp";
    const imgName = cdn + trimFull(name) + imgFormat;

    return (
        <div className="staffModal">
            <div className="image">
                <a href={imgName} target="_blank">
                    <img src={imgName} />
                </a>
                
            </div>

            <div className="info">

                <div className="header">
                    {name}
                </div>

                <div className="positions">
                    {positions.map(p => capitalizeWords(p)).join(" & ")}
                    <div className="divider" />
                </div>

                

                <div className="bio">
                    {ReactHtmlParser(bio)}
                </div>
                

                <div className="hiredSince">
                    <div className="divider" />
                    Employed: {getTimeSinceDate(hiredDate)}
                </div>
            </div>
        </div>
    );
}

export default StaffModal;