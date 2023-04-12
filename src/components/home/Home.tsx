import logo from '../../images/logo.webp';
import dateIcon from '../../icons/calendar-black.png';
import locationIcon from '../../icons/location-black.png';
import timeIcon from '../../icons/time-black.png';
import heartsIcon from '../../icons/hearts-black.png';
import decorDividerIcon from '../../icons/decor5-black.png';
import twitchIcon from '../../icons/twitch-white.png';
import discordIcon from '../../icons/discord-white.png';
import reservationIcon from '../../icons/reservation-white.png';
import { ImageType, OpeningType } from '../../commonTypes';
import GalleryButton from '../common/GalleryButton/GalleryButton';
import { useState, useEffect, useRef } from 'react';
import format from '../../format';
import sources from '../../sources';
import getExternal from '../../getExternal';
import { capitalizeWords } from '../../commonFunctions';


type Props = {
    handleModal: (content: any) => void;
    nextOpening: OpeningType | null;
    sections: any;
}

type Partner = {
    name: string,
    bio: string,
    website: string,
    discord: string,
    level: string
}

function Home(props: Props) {
    const { handleModal, nextOpening, sections } = props;
    const [ venueGallery, setVenueGallery ] = useState<ImageType[]>([]);
    const [ partners, setPartners ] = useState<Partner[]>();

    useEffect(() => {
        getExternal.files("venue").then(data => {
            setVenueGallery(format.gallery(data));
        });
        getExternal.db("getPartners").then(data => {
            setPartners(data);
        });
    }, []);

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    return (
        <>
            <div className="logo">
                <img src={logo} />
                <div className="underTitle">Restaurant & Bar</div>
            </div>
            <div className="divider" />

            {/*
            <div className="partners">
                <span className="intro">In close collaboration with...</span>
                {partners && partners.map(partner => (
                    <a className="partner" href={partner.website} target="_blank">
                        <img src={`${sources.cdn}/partners/${trimFull(partner.name)}.webp`} />
                    </a>
                ))}
                <a className="allPartnersButton">All Partners</a>
            </div>

            <div className="divider" />
                */}

            <div className="header">Welcome to the Oasis<img src={heartsIcon} /></div>
            <div className="linkbar">
                <a href="https://discord.gg/cbYNypvWpn" target="_blank">
                    <img src={discordIcon} /> Community
                </a>
                
                <button>
                    <img src={reservationIcon} /> Reservations
                </button>

                <a href="https://www.twitch.tv/cocosoasis" target="_blank">
                    <img src={twitchIcon} /> Music Stream
                </a>
            </div>

            
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