import { StaffItemType } from "./../../../commonTypes";
import { getTimeSinceDate } from "../../../commonFunctions";
import { capitalizeFirstLetter } from "../../../commonFunctions"
import ReactHtmlParser from 'react-html-parser';

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

    return (
        <div className="staffModal">
            <div className="image">
                <img src={`https://enhasa.dev/cocosoasis/cdn/characters/${name.replace(" ", "")}.webp`}></img>
            </div>

            <div className="info">

                <div className="header">
                    {name}
                </div>

                <div className="positions">
                    {positions.map(p => capitalizeFirstLetter(p)).join(" & ")}
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