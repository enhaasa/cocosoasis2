import { StaffItemType } from "../../../commonTypes";
import { capitalizeWords } from "../../../commonFunctions";
import StaffModal from './../components/_StaffModal';
import sources from "../../../sources";
import backgroundDecor from './../../../icons/oasis-palm-shade.webp';

type Props = {
    item: StaffItemType;
    handleModal: (content: any) => void;
}

function StaffItem(props: Props) {
    const {
        name,
        positions,
    } = props.item;
    const {
        handleModal
    } = props;

    const staffModal =  <StaffModal item={props.item} handleClose={() => {handleModal(null)}}/>;

    return (
        <>
            <button className="item" onClick={() => {handleModal(staffModal)}}>
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