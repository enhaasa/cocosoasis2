import { StaffItemType } from "../../../commonTypes";

type Props = {
    item: StaffItemType;
}

function formatDate(dateStr: string): string {
    const [day, month, year] = dateStr.split('.').map((str) => parseInt(str, 10));
  
    const now = new Date();
    const then = new Date(year, month - 1, day);
  
    const diffTime = now.getTime() - then.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 30) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (diffDays >= 7) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else {
        return `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`;
    }
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function StaffItem(props: Props) {
    const {
        name,
        positions,
        admin,
        isActive,
        bio,
        hiredDate,
    } = props.item;


    return (
        <button className="item">
            <div className="image">
                <img src={`https://cocosoasis.info/cdn/characters/${name.replace(" ", "")}.webp`}></img>
            </div>
            <div className="text">
                <div className="name">{name}</div>
                {/*<div className="hiredSince">{formatDate(hiredDate)}</div>*/}
                <div className="positions">
                    {/*positions.map(position => (
                        <div className="position">
                            {capitalizeFirstLetter(position)}
                        </div>
                    ))*/
                    
                    positions.map(p => capitalizeFirstLetter(p)).join(" & ")
                    }
                    
                </div>
            </div>
        </button>
    );
}

export default StaffItem;