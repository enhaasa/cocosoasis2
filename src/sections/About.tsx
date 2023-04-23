import { useState, useEffect } from 'react';
import { StaffItemType, ImageType } from '../commonTypes';
import getExternal from '../getExternal';
import format from '../format';
import StaffItem from './components/_StaffItem';
import GalleryButton from './common/GalleryButton';
import Title from './common/Title';
import Notice from './common/Notice';

type Props = {
    handleModal: (content: any) => void;
}

function Staff({ handleModal }: Props) {    
    const [ staffs, setStaffs ] = useState<StaffItemType[]>([]);
    const activeStaff = staffs.map(staff => (staff.isActive && <StaffItem key={staff.name} item={staff} handleModal={handleModal}/>));

    const [ familyGallery, setFamilyGallery ] = useState<ImageType[]>([]);

    useEffect(() => {
        getExternal.db("staff").then(data => {
            setStaffs(format.staff(data));
        });
        getExternal.files("family").then(data => {
            setFamilyGallery(format.gallery(data));
        });
    }, []);

    return (
        <>
            <div className="intro">
                <div className="about">
                    <Title 
                        text={"The basis of Oasis"}
                        divider={true}
                    />
                    
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
                            Although much has changed over time, the heart of the Oasis has ever been beating for the same purpose: 
                            To offer a romantic, relaxing, and immersive experience, both to the lovebirds of Eorzea and for any soul who needs a break from everyday life.
                        </p>
                    </span>
                </div>

                {familyGallery.length > 0 && 
                <GalleryButton 
                    images={familyGallery}
                    handleModal={handleModal}
                />}
            </div>

            <Title text={"Our family"} divider={true}/>

            <Notice text={"Click a portrait to read more about each member."} />

            <div className="collection">
                {activeStaff}
            </div>
        
        </>
    );

}

export default Staff;