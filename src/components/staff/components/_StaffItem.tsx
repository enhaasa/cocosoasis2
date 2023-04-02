import { StaffItemType } from "../../../commonTypes";
import { capitalizeWords } from "../../../commonFunctions";
import StaffModal from './../components/_StaffModal';
import Modal from './../../common/Modal';
import { useState } from "react";


type Props = {
    item: StaffItemType;
}

function StaffItem(props: Props) {
    const {
        name,
        positions,
    } = props.item;


    const [ modal, setModal ] = useState<StaffItemType | null>(null);

    function handleModalContent(content: StaffItemType | null):void {
        setModal(content);
    }

    return (
        <>
            {modal && 
                <Modal handleClose={() => {handleModalContent(null)}}>
                    <StaffModal item={props.item} handleClose={() => {handleModalContent(null)}}/>
                </Modal>
            }

            <button className="item" onClick={() => {handleModalContent(props.item)}}>
                <div className="image">
                    <img src={`https://enhasa.dev/cocosoasis/cdn/characters/${name.replace(" ", "")}.webp`}></img>
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