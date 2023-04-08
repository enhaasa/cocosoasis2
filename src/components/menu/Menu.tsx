import { useState, useEffect } from 'react';
import db from '../../db';
import format from '../../format';
import { MenuTypeType } from '../../commonTypes';
import MenuItem from './components/_MenuItem';
import SelectNav from '../common/SelectNav/SelectNav';
import decorLeft from '../../icons/decor2-white-left.png';
import decorRight from '../../icons/decor2-white-right.png';
import sources from '../../sources';

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
    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    useEffect(() => {
        db.get("getMenu").then(data => {    
            setMenu(format.menu(data));
        })
    }, []);



    return (
        <>
            <div className="sectionSelection">
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
            </div>
            
            <div className="menuList">
                {menu.map(type => (
                    sections[selectedSection].types.includes(type.name) &&
                        <div className="category">
                            <div className="header">
                                <img className="decoration" src={decorLeft} />
                                {type.title} <img className="icon" src={`${sources.cdn}/icons/${trimFull(type.name)}-white.png`}></img>
                                <img className="decoration" src={decorRight} />
                            </div>

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