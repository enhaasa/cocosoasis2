import logo from '../../images/logo.webp';
import dateIcon from '../../icons/calendar-black.png';
import locationIcon from '../../icons/location-black.png';
import timeIcon from '../../icons/time-black.png';
import heartsIcon from '../../icons/hearts-black.png';
import twitchIcon from '../../icons/twitch-white.png';
import discordIcon from '../../icons/discord-white.png';
import reservationIcon from '../../icons/reservation-white.png';
import { ImageType, OpeningType } from '../../commonTypes';
import GalleryButton from '../common/GalleryButton/GalleryButton';
import { useState, useEffect } from 'react';
import format from '../../format';
import getExternal from '../../getExternal';
import InfoModal from '../common/ModalTemplates/InfoModal';

import CallIcon from "../../icons/call-small-white.png";


type Props = {
    handleModal: (content: any) => void;
    nextOpening: OpeningType | null;
}

function Home({handleModal, nextOpening}: Props) {
    const [ venueGallery, setVenueGallery ] = useState<ImageType[]>([]);

    useEffect(() => {
        getExternal.files("venue").then(data => {
            setVenueGallery(format.gallery(data));
        });
    }, []);


    function handleReservationsButton() {
        handleModal(<InfoModal 
            content={{
                header: "Reservations",
                underTitle: "Everything you need to know",
                body: 
                <p>
                    <p>
                        Reservations are not necessary to visit the Oasis, but we recommend it if you want to make sure a table is available for you and your company.
                    </p>
                    <p>
                        Your reservation will be valid to claim within the <b>first hour of our opening</b>. The booth will be available for others if you did not arrive on time.
                    </p>
                    <p>
                        Reservations are free.
                    </p>
                </p>,
                footer: <span><img src={CallIcon} /> To make a reservation, please contact #Enhasa1319.</span>
            }}
        />);
    }

    return (
        <>
            <div className="logo">
                <img src={logo} />
                <div className="underTitle">Restaurant & Bar</div>
            </div>
            <div className="divider" />

            <div className="welcome">
                <div className="header">Welcome to the Oasis<img src={heartsIcon} /></div>
                <div className="linkbar">
                    
                    <button className="reservations" onClick={() => handleReservationsButton()}>
                        <img src={reservationIcon} /> Reservations
                    </button>

                    <a className="twitch" href="https://www.twitch.tv/cocosoasis" target="_blank">
                        <img src={twitchIcon} /> Music Stream
                    </a>

                    <a className="discord" href="https://discord.gg/cbYNypvWpn" target="_blank">
                        <img src={discordIcon} /> Community
                    </a>
                    
                </div>
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

                        {venueGallery.length > 0 &&
                            <GalleryButton 
                            images={venueGallery}
                            handleModal={handleModal}
                        />}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;