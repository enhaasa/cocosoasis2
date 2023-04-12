import getExternal from '../../getExternal';
import { useState, useEffect } from 'react';
import sources from '../../sources';

type Props = {
    handleModal: (content: any) => void
}

type Partner = {
    name: string,
    bio: string,
    website: string,
    discord: string,
    level: string
}

function Partners(props: Props) {
    const { handleModal } = props;

    const [ partners, setPartners ] = useState<Partner[]>();

    getExternal.db("getPartners").then(data => {
        setPartners(data);
    });

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }


    return (
        <div className="partners">
            {partners && partners.map(partner => (
                <a className="partner" href={partner.website} target="_blank">
                    <img src={`${sources.cdn}/partners/${trimFull(partner.name)}.webp`} />
                </a>
            ))}
        </div>
    );
}

export default Partners;