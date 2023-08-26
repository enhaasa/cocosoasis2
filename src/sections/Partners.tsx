import getExternal from '../getExternal';
import { useState, useEffect } from 'react';
import sources from '../sources';

type Props = {
    handleModal: (content: any) => void
}

type Partner = {
    name: string,
    bio: string,
    website: string,
    discord: string,
    level: string
    id: string;
}

function Partners({ handleModal }: Props) {

    const [ partners, setPartners ] = useState<Partner[]>([]);
    const venuePartners = partners ? partners.filter(partner => partner.level === "venue") : [];
    const communityPartners = partners ? partners.filter(partner => partner.level === "community") : [];

    useEffect(() => {
        getExternal.db_cache("partners").then(data => {
            setPartners(data);
        });
    }, []);

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    return (
        <div className='partners'>
            <div className='title'>Venues</div>
            <div className="items">
                {venuePartners && venuePartners.map(partner => (
                    <a className="item" href={partner.website} target="_blank" rel="noreferrer">
                        <img src={`${sources.cdn}/partners/${trimFull(partner.name)}.webp`} alt={partner.name}/>
                        <div className="name">{partner.name}</div>
                    </a>
                ))}
            </div>

            <div className='title'>Communities</div>
            <div className="items">
                {communityPartners && communityPartners.map(partner => (
                    <a className="item" href={partner.website} target="_blank" rel="noreferrer">
                        <img src={`${sources.cdn}/partners/${trimFull(partner.name)}.webp`} alt={partner.name}/>
                        <div className="name">{partner.name}</div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Partners;