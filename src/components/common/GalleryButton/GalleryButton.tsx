import { ImageType } from "../../../commonTypes";
import GalleryModal from "../ModalTemplates/GalleryModal";

type Props = {
    images:ImageType[];
    handleModal: (content: any) => void;
}

function GalleryButton(props:Props) {
    const { images, handleModal } = props;

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