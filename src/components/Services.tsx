import ServiceItem from "./_ServiceItem";
import Notice from "./common/Notice";
import Title from "./common/Title";

import CallIcon from "./../icons/call-small-white.png";
import PhotoIcon from "./../icons/camera-black.png";
import CarriageIcon from "./../icons/carriage-black.png";
import CheersIcon from "./../icons/cheers-black.png";
import TableserviceIcon from "./../icons/tableservice-black.png";
import TabIcon from "./../icons/invoice-black.png";

import Photography from "./../images/photography.png";

type Props = {
    handleModal: (content: any) => void;
}

function Services({ handleModal }:Props) {

    const includedSerivces = [
        {
            header: "Private Booths",
            undertitle: "Enjoy a cozy and intimate dining experience",
            icon: CheersIcon,
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
            footer: <span><img src={CallIcon} /> To make a reservation, please contact Enhasa#1319.</span>,
            type: "included"
        },
        {
            header: "Table Service",
            undertitle: "Relax and let us take care of you",
            icon: TableserviceIcon,
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
            type: "included"
        },
        {
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
            type: "included"
        },
    ]

    const paidServices = [
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
                        Our photoghaphy services are done in our private rooms, by Rotta Toullie.<br />
                        Check out his portfolio here: <a href="https://rtgallery.carrd.co/" target="_blank"><u>https://rtgallery.carrd.co/</u></a>
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
            footer: <span><img src={CallIcon} /> To book a photo, please message Coco, Nessie, or Rotta at the venue.</span>,
            type: "paid"
        },
        {
            header: "Carriage Ride",
            undertitle: "Arrive to the venue in unrivaled style",
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
            type: "paid"
        },
    ]


    return (
        <>
            <Notice text={"Click a service to read more."}/>


            <Title 
                text={"Included Services"} 
                underTitle={"Enjoy our complimentary offerings to enhance your dining experience at our restaurant."} 
                divider={true}
            />



            <div className="servicesTable">
                {includedSerivces.map(service => (
                    <ServiceItem 
                        header={service.header}
                        underTitle={service.undertitle}
                        icon={service.icon}
                        footer={service.footer}
                        body={service.body}
                        handleModal={handleModal}
                        type={service.type}
                    />
                ))}
            </div>

            <Title 
                text={"Paid Services"} 
                underTitle={"Indulge in our premium offerings to take your dining experience to the next level. From transportation to photography, our paid services provide an extra touch of luxury for a truly unforgettable evening."} 
                divider={true}
            />


            <div className="servicesTable">
                {paidServices.map(service => (
                    <ServiceItem 
                        header={service.header}
                        underTitle={service.undertitle}
                        icon={service.icon}
                        image={service.image}
                        footer={service.footer}
                        body={service.body}
                        handleModal={handleModal}
                        type={service.type}
                    />
                ))}
            </div>

        </>
    );
}

export default Services;