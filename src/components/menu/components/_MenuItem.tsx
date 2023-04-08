import { MenuItemType } from "../../../commonTypes";
import { useState } from "react";
import { formatStringAsPrice } from "../../../commonFunctions";
import sources from "../../../sources";

type Props = {
    item: MenuItemType
}

function MenuItem(props: Props) {
    const { 
        name,
        price,
        ingredients,
        description,
        size,
        available,
        pairings,
        hasImage
    } = props.item;

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    const cdn = sources.cdn + "/items/";
    const imgFormat = ".webp";
    const imgName = cdn + trimFull(name) + imgFormat;

    return (
        <div className="menuItem">

        {hasImage &&
        <span className="column">
            {hasImage === "1" && 
                <span className="image">
                <img src={imgName}>
                </img>
            </span>
            }
        </span>}

        <span className="column">
            <div className="row">
                <span className="name">{name}</span>
                <span className="price">{formatStringAsPrice(price.toString())} gil</span>
            </div>
            <div className="divider" />
            
            <div className="row">
                <span className="description">{description}</span>
            </div>

            <div className="row">
                <span className="ingredients">{ingredients.replace(/,/g, ", ")}</span>
            </div>
        </span>

    </div>
    );
}

export default MenuItem;