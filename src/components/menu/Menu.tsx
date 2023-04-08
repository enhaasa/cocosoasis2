import { useState, useEffect } from 'react';
import db from '../../db';
import format from '../../format';
import { MenuTypeType } from '../../commonTypes';
import MenuItem from './components/_MenuItem';
import SelectNav from '../common/SelectNav/SelectNav';

import decor1Left from '../../icons/decor1-gold-left.png';
import decor1Right from '../../icons/decor1-gold-right.png';

function Menu() {
    
    const [ menu, setMenu ] = useState<MenuTypeType[]>([]);
    const [ selectedSection, setSelectedSection ] = useState<number>(0);

    const sections = [
        {
            name: "Drinks",
            types: [
                "drink", "cocktail"
            ]
        },
        {
            name: "Meals",
            types: [
                "meal", "luxe"
            ]
        },
        {
            name: "Desserts",
            types: [
                "dessert", "herb"
            ]
        }
    ]

    function handleSelectSection(option:number):void {
        setSelectedSection(option);
    }

    useEffect(() => {
        db.get("getMenu").then(data => {    
            setMenu(format.menu(data));
        })
    }, []);

    return (
        <>
            <div className="sectionSelection">
                <img className="decoration" src={decor1Left} />
                <SelectNav 
                    options={sections.map((section, index) => (
                        {
                            id: index, 
                            title: section.name, 
                            callback: handleSelectSection
                        }
                    ))}
                    activeId={selectedSection}
                />
                <img className="decoration" src={decor1Right} />
            </div>
            <div className="menuList">
                {menu.map(type => (
                    sections[selectedSection].types.includes(type.name) &&
                        <div className="category">
                            <div className="header">{type.title}</div>
                            <div className="items double">
                                {type.items.map(item => (
                                    <MenuItem item={item} />
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </>
    );

}

export default Menu;