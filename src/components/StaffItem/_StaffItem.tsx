import { StaffItemType } from "../../commonTypes";
import { capitalizeWords, getTimeSinceDate } from "../../commonFunctions";
import InfoModal from '../common/Modals/InfoModal/InfoModal';
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
        hired_date,
        image_url,
        title
    } = props.item;
    const {
        handleModal
    } = props;

    function formatSpecialTitle(title:string):string {
        return capitalizeWords(title.replaceAll("-", " "));
    }

    const staffModal = <InfoModal content={{
        header: name,
        underTitle: positions.map(p => capitalizeWords(p)).join(" & "),
        body: ReactHtmlParser(bio),
        footer: `Employed: ${getTimeSinceDate(hired_date)}`,
        image: image_url ? image_url : undefined
    }}/>;

    return (
        <>
            <button className="item" key={name} onClick={() => {handleModal(staffModal)}}>
                <img className="backgroundDecor" src={backgroundDecor} alt='Staff Background Decor'/>

                {title !== 'staff' &&
                    <div className={`banner ${title}`}>
                        <div className="specialPosition">{formatSpecialTitle(title)}</div>
                    </div>}

                <div className="image">
                    {image_url &&
                        <img src={image_url} loading="lazy" alt=''></img>
                    }
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