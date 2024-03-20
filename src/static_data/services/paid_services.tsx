// Import icons
import CallIcon from "./../../icons/call-small-white.png";
import PhotoIcon from "./../../icons/camera-black.png";
import CarriageIcon from "./../../icons/carriage-black.png";
import CardsIcon from './../../icons/cards-black.png';

// Import images
import Photography from "./../../images/Photography.webp";
import Carriage from "./../../images/CarriageRide.webp";

// Import services
import { type Service } from "./services";

// Import cards
import cards, { type Card } from "../oracle_cards/oracle_cards";
import MenuItem from "../../components/MenuItem/_MenuItem";
import { MenuItemType } from "../../commonTypes";

function cardToMenuItem(card: Card): MenuItemType {
    return {
        name: card.name,
        type: 'card',
        price: card.price,
        ingredients: `${card.cards} cards drawn`,
        description: card.description,
        pairings: '',
        text: '',
        size: '',
        id: '',
        item: '',
        is_available: true,
        image_url: ''
    }
}

const paidServices: Service[] = [
    {
        header: "Photography",
        undertitle: "Capture the magical moment with your special someone",
        icon: PhotoIcon,
        image: Photography,
        body: 
            <span>
                <p>
                    Make your dining experience even more memorable with our photography service. 
                    Our professional photographer will capture the special moments of your evening, so you can cherish them forever.
                </p>
                <p>
                    Our photoghaphy services are done in our private rooms, by Nova Cassiopeia.<br />
                </p>
                <p>
                    <u>Prices:</u>
                    <li>Base price: 300,000 gil (one person)</li>
                    <li>Each extra person: + 100,000 gil</li>
                </p>
                <p>
                Each commission includes two angles.
                </p>
            </span>,
        footer: <span><img src={CallIcon} alt='phone'/> To book a photo, please message Coco, Nessie or Nova.</span>,
        type: 'paid',
        available: true,
    }, {
        header: "Carriage Ride",
        undertitle: "Arrive to the venue in unrivaled style",
        icon: CarriageIcon,
        image: Carriage,
        body: 
            <span>
                <p>
                    Want to make your evening that little bit more special? <br />
                    Book our transport service to the Oasis and arrive in style to your special night!
                </p>
                <p>
                    The ride begins at the ward entrance and continues through the ward for a beautiful sightseeing tour. <br />
                    An additional carriage escort also accompanies your ride to ensure a safe journey.
                </p>
                <p>
                    Price: 150,000 gil<br />
                    Payment is made directly to the carriage driver.
                </p>
            </span>,
        footer: <span><img src={CallIcon} alt='phone'/> To book a ride, please message Coco (_enhasa) beforehand.</span>,
        type: 'paid',
        available: true,
    }, {
        header: "Oracle Card Readings",
        undertitle: "Discover your destiny",
        icon: CardsIcon,
        body: 
            <span>
                <p>
                    Seeking guidance or clarity? Oracle card readings connect you with the universe's wisdom, 
                    offering insights into life's path, relationships, and personal growth in a deeply reflective experience.
                </p>

                <div className='oracle-cards'>
                        {cards.map(card => (
                            <>
                                <MenuItem item={cardToMenuItem(card)}/>
                            </>
                        ))}
                        
                </div>

            </span>,
        footer: <span><img src={CallIcon} alt='phone'/>Card readings can be requested at the venue or booked beforehand.</span>,
        type: 'paid',
        available: true,
    },
];

export default paidServices;
