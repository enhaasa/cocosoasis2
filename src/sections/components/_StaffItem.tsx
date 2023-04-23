import { StaffItemType } from "../../commonTypes";
import { capitalizeWords, getTimeSinceDate } from "../../commonFunctions";
import InfoModal from '../common/ModalTemplates/InfoModal';
import sources from "../../sources";
import backgroundDecor from './../../icons/oasis-palm-shade.webp';
import ReactHtmlParser from 'react-html-parser';

type Props = {
    item: StaffItemType;
    handleModal: (content: any) => void;
}

function StaffItem(props: Props) {
    const {
        name,
        positions,
        bio,
        hiredDate
    } = props.item;
    const {
        handleModal
    } = props;

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    const staffModal = <InfoModal content={{
        header: name,
        underTitle: positions.map(p => capitalizeWords(p)).join(" & "),
        body: ReactHtmlParser(bio),
        footer: `Employed: ${getTimeSinceDate(hiredDate)}`,
        image: `${sources.cdn}/characters/${trimFull(name)}.webp`
    }}/>;

    return (
        <>
            <button className="item" key={name} onClick={() => {handleModal(staffModal)}}>
                <img className="backgroundDecor" src={backgroundDecor}/>
                <div className="image">
                    <img src={`${sources.cdn}/characters/${name.replace(" ", "")}.webp`} loading="lazy"></img>
                </div>
                <div className="text">
                    <div className="name">{name}</div>
                    <div className="positions">
                        {positions.map(p => capitalizeWords(p)).join(" & ")}
                    </div>
                </div>
            </button>
        </>
    );
}

export default StaffItem;