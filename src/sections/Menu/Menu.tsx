import { useState, useEffect } from 'react';
import getExternal from '../../getExternal';
import db_cache from '../../db_cache';
import format from '../../format';
import { MenuItemType, MenuTypeType } from '../../commonTypes';
import MenuItem from '../../components/MenuItem/_MenuItem';
import MenuItemSpecial from '../../components/MenuItemSpecial/_MenuItemSpecial';
import SelectNav from '../../components/common/SelectNav';
import Title from '../../components/common/Title';
import InfoModal from '../../components/common/Modals/InfoModal/InfoModal';

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

    useEffect(() => {
        (async () => {
            try {
                let menu = await db_cache.get('menu_items');
    
                // Filter out only the sections which should show a weekly item
                const specialSections = sections.filter(section => section.weekly && section.weekly);
    
                // Group all promises and await all at once
                const promises = specialSections.map(section => getExternal.weekly(section.weekly!));
    
                const results = await Promise.allSettled(promises);
    
                // Process the results, filtering out any that failed
                const successfulResults = results.filter(result => result.status === 'fulfilled').map(result => (result as PromiseFulfilledResult<MenuItemType>).value);
    
                // Filter out weekly items from the regular menu
                
                menu = menu.filter((item: MenuItemType) => !successfulResults.find(specialItem => specialItem.id === item.id));
                setMenu(format.menu(menu));
    
                // Render specials, only including the successful ones
                const specials = successfulResults.map((item, index) => ({ name: specialSections[index].weekly, item: item }));
                setWeeklySpecials(specials);
            } catch (error) {
                console.error('Failed to fetch weekly specials:', error);
                // If there is an error, do not display specials
                setWeeklySpecials([]);
            }
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
                                icon={`images/icons/${type.name}.png`}
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