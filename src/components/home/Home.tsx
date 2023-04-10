import logo from '../../images/logo.webp';
import dateIcon from '../../icons/date-black.png';
import locationIcon from '../../icons/location-black.png';
import GalleryButton from '../common/GalleryButton/GalleryButton';

type Props = {
    handleModal: (content: any) => void;
}

function Home(props: Props) {
    const { handleModal } = props;

    return (
        <>
            <div className="logo">
                <img src={logo} />
                <div className="underTitle">Restaurant & Bar</div>
            </div>
            <div className="divider" />

            <div className="header">
                Welcome to the Oasis
            </div>

            <div className="venueInfo">
                <div className="row">
                    <img src={dateIcon} />[Alpha] The Goblet, Ward 2, Plot 8
                </div>
                <div className="row">
                <img src={locationIcon} />[PLACEHOLDER__OPENING_TIMES]
                </div>
            </div>
            <div className="divider" />

            <nav className="linkbar">
                <button className="item">[PLACEHOLDER__STREAM]</button>
                <button className="item">[PLACEHOLDER__COMMUNITY]</button>
                <button className="item">[PLACEHOLDER__RESERVATIONS]</button>
            </nav>

            <p>

            </p>

            <div className="showcase">
                [PLACEHOLDER__VENUE_GALLERY]
            </div>
        
            <div className="gallery">
                [PLACEHOLDER__IMAGE_GALLERY]
            </div>

        </>
    );
}

export default Home;