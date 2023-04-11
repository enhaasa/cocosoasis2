import logo from '../../images/logo.webp';
import dateIcon from '../../icons/calendar-black.png';
import locationIcon from '../../icons/location-black.png';
import timeIcon from '../../icons/time-black.png';
import twitchIcon from '../../icons/twitch.png';
import discordIcon from '../../icons/discord.png';
import { ImageType, OpeningType } from '../../commonTypes';
import GalleryButton from '../common/GalleryButton/GalleryButton';
import { useState, useEffect } from 'react';
import format from '../../format';
import getExternal from '../../getExternal';


type Props = {
    handleModal: (content: any) => void;
    nextOpening: OpeningType | null;
}

function Home(props: Props) {
    const { handleModal, nextOpening } = props;
    const [ venueGallery, setVenueGallery ] = useState<ImageType[]>([]);

    useEffect(() => {
        getExternal.files("venue").then(data => {
            setVenueGallery(format.gallery(data));
        });
    }, []);
    

    return (
        <>
            <div className="logo">
                <img src={logo} />
                <div className="underTitle">Restaurant & Bar</div>
            </div>
            <div className="divider" />


            <div className="partners">
                [PLACEHOLDER__PARTNER][PLACEHOLDER__PARTNER][PLACEHOLDER__PARTNER]
            </div>

            <div className="divider" />

            <div className="header">Welcome to the Oasis</div>
            [PLACEHOLDER__NAVBAR]
            
            <br /><br /><br /><br /><br /><br />
            <div className="divider" />
            <div className="venueInfo">
                <div className="column">
                    
                    
                    <div className="row">
                        <span className="infoWithIcon">
                            <img src={locationIcon} />
                            [Alpha] The Goblet<br />
                            Ward 2, Plot 8
                        </span>

                        <span className="infoWithIcon">
                            <img src={dateIcon} />
                            Next opening: <br />
                            {nextOpening ? nextOpening.date : "No openings currently scheduled."}
                        </span>

                        <span className="infoWithIcon">
                            <img src={timeIcon} />
                            Opening times: <br />
                            6pm to 9pm ST
                        </span>
                    </div>
                    <div className="divider" />

                    <div className="intro">
                        <p>
                            Experience the exotic charm of Thavnair at Coco's Oasis, where every detail is designed to transport you to a peaceful escape.
                        </p> 

                        <p>
                            Savor the flavors of our gourmet menu served in the comfort of your private booth with attentive table service, or relax with a drink from our bar. Let the soothing sounds of our relaxing music, streamed live on twitch during our hours of operation, add to the serenity.
                        </p>

                        <p>
                            Arrive in style with our complimentary carriage rides and enjoy a romantic dinner or a well-deserved break from the world. Immerse yourself in the essence of Thavnairian culture and book your visit to Coco's Oasis now. ♥
                        </p>
                    </div>
                </div>

                <div className="column">
                    <div className="galleryButtonWrapper">
                        <GalleryButton 
                            images={venueGallery}
                            handleModal={handleModal}
                        />
                    </div>
                </div>
                

            </div>


            <div className="gallery">
                
            </div>

        </>
    );
}

export default Home;