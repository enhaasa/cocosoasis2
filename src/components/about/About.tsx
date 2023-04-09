import { useState, useEffect } from 'react';
import { StaffItemType } from '../../commonTypes';
import db from '../../db';
import format from '../../format';
import StaffItem from './components/_StaffItem';
import groupshot from './../../images/anniversary.webp';
import ImageModal from '../common/ModalTemplates/ImageModal';
import GalleryModal from '../common/ModalTemplates/GalleryModal';

type Props = {
    handleModal: (content: any) => void;
}

function Staff(props: Props) {
    const { handleModal } = props;
    
    const [ staffs, setStaffs ] = useState<StaffItemType[]>([]);
    const activeStaff = staffs.map(staff => (staff.isActive && <StaffItem item={staff} handleModal={handleModal}/>));

    useEffect(() => {
        db.get("getStaff").then(data => {
            setStaffs(format.staff(data));
        })
    }, []);

    const image = {
        name: "Group Shop", 
        url: groupshot
    }
    const imageModal = <ImageModal image={image}/>;
    const images = [
        {
            name: "Image 1",
            url: "https://wallpapercave.com/wp/dcFwnop.jpg"
        },
        {
            name: "Image 2",
            url: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701311457-optimized.jpg"
        }
    ]

    return (
        <>
            <button onClick={() => handleModal(<GalleryModal images={images}/>)}>Create GalleryModal</button>
            <div className="intro">
                <div className="about">
                    <div className="header">
                        The basis of Oasis
                    </div>
                    <div className="divider" />
                    
                    <span className="text">
                        <p>
                            Coco's Oasis first opened its doors on the 27th of March, 2022 as a small restaurant in the Lavender Beds, consisting of four spirited members:
                            Coco, Strixxi, Gorberljin and Welgar. It offered a mix of far- and near eastern cuisine, massage services and tabletop items.
                        </p>
                        <p>
                            The little venue has grown over time into the proud restaurant it is today, with a plethora of lovely additions to the staff. 
                            The theme of the venue has drilled itself deep into Thavnairian culture, 
                            which is reflected in the choice of culinary options, staff attire, and venue decor.
                        </p>
                        <p>
                            Although much has changed over time, the heart of the Oasis has ever been beating for the same purpose: To offer a romantic, relaxing, and
                            immersive experience, both for the lovebirds of Eorzea, and for any soul who needs a break from everyday life. 
                        </p>
                    </span>
                </div>

                <button className="groupShot" onClick={() => handleModal(imageModal)}>
                    <img src={groupshot} loading="lazy" />
                </button>
            </div>

            <div className="header">
                Our family
            </div>

            <div className="divider" />
            <p>
                Click a portrait to read more about each member.
            </p>

            <div className="collection">
                {activeStaff}
            </div>
        
        </>
    );

}

export default Staff;