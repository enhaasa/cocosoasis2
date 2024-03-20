// Import components
import ServiceItem from "../../components/ServiceItem/_ServiceItem";
import Notice from "../../components/common/Notice";
import Title from "../../components/common/Title";

// Services
import paidServices from "../../static_data/services/paid_services";
import includedServices from "../../static_data/services/included_services";
import { type Service } from "../../static_data/services/services";

type Props = {
    handleModal: (content: any) => void;
}

function Services({ handleModal }:Props) {

    return (
        <>
            <Notice text={"Click a service to read more."}/>

            <Title 
                text={"Included Services"} 
                underTitle={"Enjoy our complimentary offerings to enhance your dining experience at our restaurant."} 
                divider={true}
            />

            <div className="servicesTable">
                {includedServices.map((service: Service, index) => (
                    <ServiceItem 
                        header={service.header}
                        underTitle={service.undertitle}
                        image={service.image}
                        icon={service.icon}
                        footer={service.footer}
                        body={service.body}
                        handleModal={handleModal}
                        type={service.type}
                        key={`includedService${service.type}${index}`}
                        available={service.available}
                    />
                ))}
            </div>

            <Title 
                text={"Paid Services"} 
                underTitle={"Indulge in our premium offerings to take your dining experience to the next level. From transportation to photography, our paid services provide an extra touch of luxury for a truly unforgettable evening."} 
                divider={true}
            />

            <div className="servicesTable">
                {paidServices.map((service, index) => (
                    <ServiceItem 
                        header={service.header}
                        underTitle={service.undertitle}
                        icon={service.icon}
                        image={service.image}
                        footer={service.footer}
                        body={service.body}
                        handleModal={handleModal}
                        type={service.type}
                        key={`includedService${service.type}${index}`}
                        available={service.available}
                    />
                ))}
            </div>
        </>
    );
}

export default Services;