import ServiceItem from "./components/_ServiceItem";

import CallIcon from "../../icons/call-small-white.png";
import PhotoIcon from "../../icons/camera-black.png";
import CarriageIcon from "../../icons/carriage-black.png";

type Props = {
    handleModal: (content: any) => void;
}

function Services({ handleModal }:Props) {


    const paidServices = [
        {
            header: "Photography",
            undertitle: "Eternally capture the magic moment with your special someone!",
            icon: PhotoIcon,
            body: 
                <span>
                    <p>
                        We offer photography services in our private rooms.<br />
                        Each commission includes two angles.
                    </p>
                    <p>
                        <u>Prices:</u>
                        <li>Base price: 300,000 gil (one person)</li>
                        <li>Each extra person: + 100,000 gil</li>
                    </p>
                </span>,
            footer: <span><img src={CallIcon} /> To book a photo, please message Coco, Nessie, or Rotta at the venue.</span>,
        },
        {
            header: "Carriage Ride",
            undertitle: "Arrive to the venue in unrivaled style.",
            icon: CarriageIcon,
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
            footer: <span><img src={CallIcon} /> To book a ride, please message Coco (Enhasa#1319) beforehand.</span>,
        },
    ]


    return (
        <>
            <div className="title">
                Included Services
            </div>
            <div className="divider" />


            <div className="title">
                Paid Services
            </div>
            <div className="divider" />

            <div className="servicesTable">
                {paidServices.map(service => (
                    <ServiceItem 
                        header={service.header}
                        underTitle={service.undertitle}
                        icon={service.icon}
                        footer={service.footer}
                        body={service.body}
                        handleModal={handleModal}
                    />
                ))}
            </div>

        </>
    );
}

export default Services;