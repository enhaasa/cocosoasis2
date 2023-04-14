import { useState, useEffect } from 'react';
import getExternal from '../../getExternal';
import format from '../../format';
import { MenuTypeType } from '../../commonTypes';
import MenuItem from './components/_MenuItem';
import SelectNav from '../common/SelectNav/SelectNav';
import Title from '../common/Title';

import decorLeft from '../../icons/decor2-white-left.png';
import decorRight from '../../icons/decor2-white-right.png';
import sources from '../../sources';

type Props = {
    handleModal: (content: any) => void;
}

function Menu(props:Props) {
    
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
        getExternal.db("getMenu").then(data => {    
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
                            <Title 
                                text={type.title}
                                icon={`${sources.cdn}/icons/${trimFull(type.name)}-white.png`}
                                divider={false}
                            />
                            

                            <div className="items">
                                {type.items.map(item => (
                                    <MenuItem item={item} key={item.id} />
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </>
    );

}

export default Menu;