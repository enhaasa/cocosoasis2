// Import icons
import CallIcon from "./../../icons/call-small-white.png";
import DrinksIcon from "./../../icons/drinks-black.png";
import TableserviceIcon from "./../../icons/tableservice-black.png";
import TabIcon from "./../../icons/invoice-black.png";
import TabletopIcon from "./../../icons/tabletops-black.png";
import LivemusicIcon from "./../../icons/harp-black.png";
import PrivateBoothIcon from "./../../icons/dating-black.png";
import MusicIcon from "./../../icons/music-black.png";

// Import images
import Livemusic from "./../../images/LiveMusic.webp";
import Barservices from "./../../images/BarServices.webp";
import Tableservice from "./../../images/TableService.webp";
import Tabletop from "./../../images/RealTabletops.webp";
import Privatebooths from "./../../images/PrivateBooths.webp";

// Import service
import { type Service } from './services';

const includedSerivces: Service[] = [
    {
        header: "Private Booths",
        undertitle: "Enjoy a cozy and intimate dining experience",
        icon: PrivateBoothIcon,
        image: Privatebooths,
        body: 
            <span>
                <p>
                    Nestled in a beautiful basement setting, with an indoor waterfall as the centerpiece, our private booths provide the perfect oasis vibe for an intimate dining experience with your loved ones.
                </p>
                <p>
                    Our private booths are designed to provide an unparalleled level of seclusion, with each one located in its own cozy nook. 
                    The intimate setting of the booths is perfect for any occasion, from a romantic dinner for two to a gathering with friends and family.
                </p>
            </span>,
        footer: <span><img src={CallIcon} alt='Call Icon' /> To make a reservation, please contact _enhasa.</span>,
        type: 'included',
        available: true,
    }, {
        header: "Table Service",
        undertitle: "Relax and let us take care of you",
        icon: TableserviceIcon,
        image: Tableservice,
        body: 
            <span>
                <p>
                    At the Oasis, we pride ourselves on providing exceptional service to our guests. 
                    Our table service option allows you to relax and enjoy your dining experience, while our attentive staff take care of everything for you.
                </p>
                <p>
                    From the moment you are seated at your private booth, our dedicated servers will be on hand to cater to your every need. 
                    From taking your order to recommending the perfect drink pairing, our staff will ensure that your dining experience is unforgettable.
                </p>
                <p>
                    Table service is included as part of our commitment to providing a first-class dining experience to all of our guests. 
                    Sit back, relax and let us take care of the rest.
                </p>
            </span>,
        type: 'included',
        available: true,
    }, {
        header: "Pay by Tab",
        undertitle: "Savor the moment, pay later",
        icon: TabIcon,
        body: 
            <span>
                <p>
                    We want you to savor the moment and enjoy your dining experience to the fullest. 
                    That's why we offer a pay by tab option, where upfront payment is not necessary.
                </p>
                <p>
                    Order as much as you like from our menu, and we'll keep track of your tab for you. 
                    When you're ready to leave, simply pay the tab in one easy transaction.
                </p>
                <p>
                    Our pay by tab option provides added convenience and flexibility for our guests, allowing you to focus on enjoying your dining experience without any interruptions. 
                </p>
            </span>,
        type: 'included',
        available: true,
    }, {
        header: "Real Tabletops",
        undertitle: "A truly immersive dining experience",
        icon: TabletopIcon,
        image: Tabletop,
        body: 
            <span>
                <p>
                    The Oasis takes immersion to the next level by offering a visual treat.
                </p>
                <p>
                    Each meal (and some drinks) have a unique tabletop item representing it. 
                    This will be placed on your table when you have made an order, instead of trading consumable items, if you are seated at a table in the restaurant.
                </p>
            </span>,
        type: 'included',
        available: true,
    }, {
        header: "Relaxing Music Stream",
        undertitle: "Personally hand-picked romantic songs on Twitch",
        icon: MusicIcon,
        body: 
            <span>
                <p>
                    We value your evening at the Oasis and want and want to help set the tone for comfort and romance.
                </p>
                <p>
                    That's why our stream has multiple, personally hand-picked playlists with everything from acoustic guitar, piano and beautiful Bossa Nova covers of many well-known songs.
                    The tracks are often accompanied by soft background-noises of dripping rain, ocean breezes, or crackles from a warm fireplace.
                </p>
                <p>
                    Get comfy and listen along with us during opening times!
                </p>
                <p>
                    Stream link: <a href="https://www.twitch.tv/cocosoasis" rel='noreferrer' target="_blank"><u>https://www.twitch.tv/cocosoasis</u></a>
                </p>

            </span>,
        type: 'included',
        available: true,
    }, {
        header: "Bar Services",
        undertitle: "For more lighthearted roleplay",
        icon: DrinksIcon,
        image: Barservices,
        body: 
            <span>
                <p>
                    You will find our bar on the groundfloor, right infront of the entrance.
                </p>
                <p>
                    The Oasis bar offers drinks and cocktails mostly in the form of consumable items, served by our lovely bartenders.
                    This is a great place if you are not ready for the fully fledged restaurant service, or just want to have a drink in peace after a long day.
                    Regardless of the reason, our bartenders are here for you!
                </p>
            </span>,
        type: 'included',
        available: true,
    }, {
        header: "Live Music",
        undertitle: "Enjoy tunes by a live playing bard",
        icon: LivemusicIcon,
        image: Livemusic,
        body: 
            <span>
                <p>
                    Our house bard, Welgar, is here during our openings to offer relaxing live music in the estate.
                    You will find her playing either on the ground floor or downstairs. 
                </p>

            </span>,
        type: 'included',
        available: true,
    },
];

export default includedSerivces;

