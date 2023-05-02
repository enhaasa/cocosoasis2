import { MenuItemType } from "./../../commonTypes";
import { formatStringAsPrice, capitalizeWords } from "./../../commonFunctions";
import sources from "./../../sources";

type Props = {
    item: MenuItemType
}

function MenuItemSpecial(props: Props) {
    const { 
        name,
        price,
        ingredients,
        description,
        hasImage,
        type
    } = props.item;

    function addDiscount(price: number): number {
        return price / 2;
    }

    function trimFull(string:string):string {
        return string.replace(/\s/g, '');
    }

    const cdn = sources.cdn + "/items/";
    const imgFormat = ".webp";
    const imgName = cdn + trimFull(name) + imgFormat;

    return (
        <div className={`menuItemSpecial`} key={name}>
            {hasImage &&
            <span className="column">
                {hasImage === "1" && 
                    <span className="image">
                    <img src={imgName} loading="lazy">
                    </img>
                </span>
                }
            </span>}

            <span className="column" >
                <div className="row">
                        <span className="label">{`${capitalizeWords(type)} of the week`}</span>


                </div>
                <div className="row">
                    <span className="name">{name}</span>
                    <span className="priceSection">
                            <span className="price">{`${formatStringAsPrice(price.toString())} gil`}</span>
                            <span className="discountPrice">{`${formatStringAsPrice(addDiscount(price).toString())} gil`}
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
    );
}

export default MenuItemSpecial;