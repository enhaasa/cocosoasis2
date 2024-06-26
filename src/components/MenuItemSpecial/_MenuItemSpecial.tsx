import { MenuItemType } from "../../commonTypes";
import { formatStringAsPrice, capitalizeWords } from "../../commonFunctions";
import sources from "../../sources";

import BounceIn from "../common/BounceIn";

type Props = {
    item: MenuItemType,
    name?: string;
}

function MenuItemSpecial(props: Props) {
    const { 
        id,
        name,
        price,
        original_price,
        ingredients,
        description,
        image_url,
        type,
    } = props.item;

    const typesWithImages = ['Meals', 'Luxe', 'Desserts'];

    const cdn = sources.cdn + "/oasis/dining_items/";
    const imgFormat = ".webp";
    const imgName = cdn + id + imgFormat;

    return (
        <BounceIn>
            <div className="specialMenuSection">
                <div className={`menuItemSpecial`} key={name}>
                    {typesWithImages.includes(type) &&
                    <span className="column">
                            <span className="image">
                            <img src={imgName} loading="lazy">
                            </img>
                        </span>
                    </span>}

                    <span className="column" >
                        <div className="row">
                                <span className="label">{`${props.name} of the week`}</span>

                        </div>
                        <div className="row">
                            <span className="name">{name}</span>
                            <span className="priceSection">
                                    <span className="price">{`${formatStringAsPrice(original_price!.toString())} gil`}</span>
                                    <span className="discountPrice">{`${formatStringAsPrice(price.toString())} gil`}
                                </span>
                            </span>
                        </div>
                        
                        <div className="row">
                            <span className="description">{description}</span>
                        </div>

                        <div className="row">
                            <span className="ingredients">{ingredients.replace(/,/g, ", ")}</span>
                        </div>
                    </span>
                </div>
            </div>
        </BounceIn>
    );
}

export default MenuItemSpecial;