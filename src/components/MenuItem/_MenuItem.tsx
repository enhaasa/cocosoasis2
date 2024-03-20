import { forwardRef } from "react";

import { MenuItemType } from "../../commonTypes";
import { formatStringAsPrice } from "../../commonFunctions";
import sources from "../../sources";

type Props = {
    item: MenuItemType
    ref?: any
}

export default forwardRef(function MenuItem(props: Props) {
    const { 
        id,
        name,
        price,
        ingredients,
        description,
        type
    } = props.item;

    const {
        ref
    } = props;

    const typesWithImages = ['meal', 'luxe', 'dessert'];

    const cdn = sources.cdn + "/oasis/dining_items/";
    const imgFormat = ".webp";
    const imgName = cdn + id + imgFormat;

    return (
        <div className={`menuItem`} key={name} ref={ref}>
            {typesWithImages.includes(type) &&
            <span className="column">
                    <span className="image">
                    <img src={imgName} alt='Menu Item' loading="lazy">
                    </img>
                </span>
            </span>}

            <span className="column" >
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
});