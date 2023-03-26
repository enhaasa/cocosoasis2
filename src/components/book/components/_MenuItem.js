import { useState } from "react";

function MenuItem(props) {
    const { item } = props;

    function trimFull(string) {
        return string.replace(/\s/g, '');
    }

    const [ hasImage, setHasImage ] = useState(true);
    function handleImageError() {
        setHasImage(false);
    }

    const cdn = "https://cocosoasis.info/cdn/items/";
    const imgFormat = ".webp";
    const imgName = cdn + trimFull(item.name) + imgFormat;

    return (
        <div className="menuItem">

            {hasImage &&
            <span className="column">
                <span className="image">
                    <img 
                        src={imgName}
                        onError={handleImageError}
                    >
                    </img>
                </span>
            </span>}

            <span className="column">
                <div className="row">
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price} gil</span>
                </div>
                
                <div className="row">
                    <span className="description">{item.description}</span>
                </div>

                <div className="row">
                    <span className="ingredients">{item.ingredients.replace(/,/g, ", ")}</span>
                </div>
            </span>

        </div>
    );
}

export default MenuItem;