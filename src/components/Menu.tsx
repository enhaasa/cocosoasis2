import { useState, useEffect } from 'react';
import db from '../db';
import format from '../format';

type MenuItem = {
    name: string;
    type: string;
    price: number;
    ingredients: string[];
    description: string;
    pairings: string;
    size: string;
    id: string;
    item: string;
    available: boolean;
}

function Menu() {
    
    const [ menu, setMenu ] = useState<MenuItem[]>([]);

    useEffect(() => {
        db.get("getMenu").then(data => {
            setMenu(data);
        })
    }, []);

    return (
        <>
            <div className="header">
                <h1>Bar Menu</h1>
            </div>

            {
                menu.map(item => (item.name))
            }
        
        </>
    );

}

export default Menu;