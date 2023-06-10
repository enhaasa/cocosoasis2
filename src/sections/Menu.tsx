import { useState, useEffect } from 'react';
import getExternal from '../getExternal';
import format from '../format';
import { MenuItemType, MenuTypeType } from '../commonTypes';
import MenuItem from './components/_MenuItem';
import MenuItemSpecial from './components/_MenuItemSpecial';
import SelectNav from './common/SelectNav';
import Title from './common/Title';
import sources from '../sources';
import InfoModal from './common/ModalTemplates/InfoModal';

type Props = {
    handleModal: (content: any) => void;
}

function Menu({ handleModal }:Props) {
    const [ menu, setMenu ] = useState<MenuTypeType[]>([]);
    const [ weeklySpecials, setWeeklySpecials ] = useState<any>([]);
    const [ selectedSection, setSelectedSection ] = useState<number>(0);

    const sections = [
        {
            name: "Drinks",
            weekly: "cocktail",
            types: ["drink", "cocktail"]
        },
        {
            name: "Meals",
            weekly: "meal",
            types: ["meal"]
        },
        {
            name: "Desserts",
            types: ["dessert"]
        },
        {
            name: "Luxe",
            types: ["luxe"]
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
        (async () => {
            let menu = await getExternal.db_cache("menu");        
            //setMenu(format.menu(menu)); //To be removed when below code is taken live

            //Filter out only the sections which should show a weekly item
            const specialSections = sections.filter(section => section.weekly && section.weekly);

            //Group all promises and await all at once
            const promises = specialSections.map(section => getExternal.weekly(section.weekly!));
            const specialItems = await Promise.all(promises);

            //Filter out weekly items from the regular menu
            menu = menu.filter((item:any) => !specialItems.find(specialItem => specialItem.id === item.id));
            setMenu(format.menu(menu))

            //Render specials
            const specials = specialItems.map((item, index) => ({name: specialSections[index].weekly, item: item}));
            setWeeklySpecials(specials);
            

        })();
    }, []);


    const currentSpecial = weeklySpecials.find((s:any) => s.name === sections[selectedSection].weekly);
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
                {
                    currentSpecial !== undefined &&
                        <div className="specialMenuSection">
                            <MenuItemSpecial item={currentSpecial.item} key={`${currentSpecial.name}special`} />
                        </div>
                        
                }

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
                                    <MenuItem item={item!} key={item.id} />
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </>
    );
}

export default Menu;