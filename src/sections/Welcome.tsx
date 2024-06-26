import logo from './../images/logo.webp';
import dateIcon from './../icons/calendar-black.png';
import locationIcon from './../icons/location-black.png';
import timeIcon from './../icons/time-black.png';
import heartsIcon from './../icons/hearts-black.png';
import twitchIcon from './../icons/twitch-white.png';
import CallIcon from "./../icons/call-small-white.png";
import discordIcon from './../icons/discord-white.png';
import reservationIcon from './../icons/reservation-white.png';

import { ImageType, OpeningType } from '../commonTypes';
import GalleryButton from './../components/common/GalleryButton';
import { useState, useEffect } from 'react';
import format from '../format';
import getExternal from '../getExternal';
import InfoModal from '../components/common/Modals/InfoModal/InfoModal';
import ImageButton from './../components/common/ImageButton';
import Title from './../components/common/Title';

import Valentines2024Image from './../images/valentines2024laura.webp';
import ValentinesComFan2024 from './../images/communityfavourite2024.webp';
import Valentines2023Image from './../images/valentines2023.webp';
import Halloween2023WinnerImage from './../images/halloween2023winner.webp';

import EventBannerImage from './../images/Cocos_Oasis_Kohzee_Collab.webp';

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
                footer: <span><img src={CallIcon} alt='Phone' /> To make a reservation, please contact _enhasa.</span>
            }}
        />);
    }

    return (
        <>
            <div className="logo">
                <img src={logo} alt='Logo' />
                <div className="underTitle">Thavnairian Restaurant & Bar</div>
            </div>
            <div className="divider" />

            <div className="welcome">
                <div className="header">Welcome to the Oasis<img src={heartsIcon} alt='Hearts' /></div>
                <div className="linkbar">
                    
                    <button className="reservations" onClick={() => handleReservationsButton()}>
                        <img src={reservationIcon} alt='Reservation' /> Reservations
                    </button>

                    <a className="twitch" href="https://www.twitch.tv/cocosoasis" target="_blank" rel="noreferrer">
                        <img src={twitchIcon} alt='Twitch' /> Music Stream
                    </a>

                    <a className="discord" href="https://discord.gg/B5PP9FBDRS" target="_blank" rel="noreferrer">
                        <img src={discordIcon} alt='Discord' /> Community
                    </a>
                    
                </div>
            </div>

            {/*
            <div className="divider" /> 
            
            <div className='event-banner'>
                <img src={EventBannerImage} alt='Reservation' />
            </div>
            */}

            <div className="divider" />
            <div className="venueInfo">
                <div className="column">
                    <div className="row">
                        <span className="infoWithIcon">
                            <img src={locationIcon} alt='Location' />
                            [Alpha] The Goblet<br />
                            Ward 2, Plot 8
                        </span>

                        <span className="infoWithIcon">
                            <img src={dateIcon} alt='Date'/>
                            Next opening: <br />
                            {nextOpening ? nextOpening.date : "No openings currently scheduled."}
                        </span>

                        <span className="infoWithIcon">
                            <img src={timeIcon} alt='Time'/>
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
                            Savour the flavors of our gourmet menu served in the comfort of your private booth with attentive table service, or relax with a drink at our bar. 
                            Let the soothing sounds of our relaxing music stream or local bard, add to the serenity.
                        </p>

                        <p>
                            Arrive in style with our complimentary carriage rides and enjoy a romantic dinner or a well-deserved break from the world. 
                            Immerse yourself in the essence of Thavnairian culture and book your visit to Coco's Oasis now. ♥
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

            <div className="divider" />

            <div className="hall-of-fame">
                <Title
                    text={"Hall of Fame"} 
                    divider={false}
                />
                
                <div className="main">
                    <div className="title">
                        Valentines 2024 Photo Contest Winner
                    </div>
                    <div className="description">
                        by Laura Sykurwyn  
                    </div>
                    <div className="image">
                        <ImageButton
                            image={{name: "Valentines 2024 Winner", url: Valentines2024Image}}
                            handleModal={handleModal}
                        />
                    </div>
                </div>

                <div className="gallery">
                    <div className="item">
                        <div className="title">
                            Valentines 2024 Community Favourite
                        </div>
                        <div className="description">
                            by Livia Nightbelt
                        </div>
                        <div className="image">
                            <ImageButton
                                image={{name: "Valentines 2024 Community Favourite", url: ValentinesComFan2024}}
                                handleModal={handleModal}
                            />
                        </div>
                    </div>

                    <div className="item">
                        <div className="title">
                            Halloween 2023 Photo Contest Winner
                        </div>
                        <div className="description">
                            by Misa Ki
                        </div>
                        <div className="image">
                            <ImageButton
                                image={{name: "Halloween 2023 Wiinner", url: Halloween2023WinnerImage}}
                                handleModal={handleModal}
                            />
                        </div>
                    </div>

                    <div className="item">
                        <div className="title">
                            Valentines 2023 Photo Contest Winner
                        </div>
                        <div className="description">
                            by Vestar
                        </div>
                        <div className="image">
                            <ImageButton
                                image={{name: "Valentines 2023 Wiinner", url: Valentines2023Image}}
                                handleModal={handleModal}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
