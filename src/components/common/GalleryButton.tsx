import { ImageType } from "../../commonTypes";
import GalleryModal from "./Modals/GalleryModal/GalleryModal";

type Props = {
    images:ImageType[];
    handleModal: (content: any) => void;
}

function GalleryButton({ images, handleModal }:Props) {

    return (
        <button className="galleryButton" onClick={() => handleModal(<GalleryModal images={images}/>)}>
            <div className="image">
                <img className="bottomImage" src={images[1] ? images[1].url : ""} loading="lazy" />
                <img className="topImage" src={images[0] ? images[0].url : ""} loading="lazy" />
            </div>
            
        </button>
    );
}

export default GalleryButton;