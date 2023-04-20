import { useState, useEffect } from 'react';
import getExternal from '../getExternal';
import format from '../format';
import { MenuItemType, MenuTypeType } from '../commonTypes';
import MenuItem from './_MenuItem';
import SelectNav from './common/SelectNav';
import Title from './common/Title';
import sources from '../sources';
import InfoModal from './common/ModalTemplates/InfoModal';

type Props = {
    handleModal: (content: any) => void;
}



function Menu({ handleModal }:Props) {
    
    const [ menu, setMenu ] = useState<MenuTypeType[]>([]);
    const [ specialCocktail, setSpecialCocktail ] = useState("2zEDSWoSOv");
    const [ specialMeal, setSpecialMeal ] = useState("jg=Eg%KgL");

    const [ selectedSection, setSelectedSection ] = useState<number>(0);

    const sections = [
        {
            name: "Drinks",
            specialItem: findMenuItemById(specialCocktail),
            types: [
                "drink", "cocktail"
            ]
        },
        {
            name: "Meals",
            specialItem: findMenuItemById(specialMeal),
            types: [
                "meal", "luxe"
            ]
        },
        {
            name: "Desserts",
            types: [
                "dessert"
            ]
        },
        {
            name: "Herbs",
            types: [
                "herb"
            ]
        }
    ];


    /**
     * Old menu
     */

    const oldMenu = menu.find(type => type.name === "legacy");
    const oldMenuModal = oldMenu && <InfoModal 
        content = {{
            header: "Old Menu",
            underTitle: "Our classic menu!",
            body: 
            <div className="oldMenu">{oldMenu.items.map(item => 
                <div className="item" key={`menuSection${item.name}`}>
                    <div className="row">
                        <span className="title">{item.name}</span> 
                        <span className="price">{`${item.price} gil`}</span>
                    </div>
                    <div className="row">
                        <div className="description">{item.description}</div>
                    </div>
                </div>)}
            </div>
        }}
    />

    function findMenuItemById(id:string) {
        const foundMenuType = menu.find(menuType => {
          const foundItemIndex = menuType.items.findIndex(item => item.id === id);
          return foundItemIndex !== -1;
        });
        
        return foundMenuType ? foundMenuType.items.find(item => item.id === id) : undefined;
    }


    function handleOldMenu() {
        handleModal(oldMenuModal);
    }

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

                <button className="oldMenuButton" onClick={() => handleOldMenu()}>Old Menu</button>
            </div>
            <div className="divider" />
            
            <div className="menuList">


                {menu.map(type => (
                    sections[selectedSection].types.includes(type.name) &&
                        <div className="category">
                            <Title 
                                text={type.title}
                                icon={`${sources.cdn}/icons/${trimFull(type.name)}-white.png`}
                                divider={false}
                                key={type.title}
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