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

    getExternal.db("partners").then(data => {
        setPartners(data);
    });

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }


    return (
        <div className="partners">
            {partners && partners.map(partner => (
                <a className="partner" href={partner.website} target="_blank" rel="noreferrer" key={partner.id}>
                    <img src={`${sources.cdn}/partners/${trimFull(partner.name)}.webp`} />
                    <div className="name">{partner.name}</div>
                </a>
            ))}
        </div>
    );
}

export default Partners;