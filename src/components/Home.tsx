type Props = {
    handleModal: (content: any) => void;
}

function Home(props: Props) {
    return (
        <>
            <div className="logo">
                Logo
            </div>

            <div className="header">
                Welcome to the Oasis
            </div>

            <div className="venue-info">
                <div className="row">
                    Location
                </div>
                <div className="row">
                    Opening Times
                </div>
            </div>

            <nav className="linkbar">
                <button className="item">Music Stream</button>
                <button className="item">Community</button>
                <button className="item">Reservations</button>
            </nav>

            <p>

            </p>

            <div className="showcase">
                Image Carousel
            </div>
        
            <div className="gallery">
                Image Gallery
            </div>

        </>
    );
}

export default Home;