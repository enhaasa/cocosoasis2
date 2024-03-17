import { ImageType } from "../../commonTypes";
import ImageModal from "./Modals/ImageModal/ImageModal";

type Props = {
    image:ImageType;
    handleModal: (content: any) => void;
}

function ImageButton({ image, handleModal }:Props) {

    return (
        <button className="imageButton" onClick={() => handleModal(<ImageModal image={image}/>)}>
            <div className="image">
                <img alt="" src={image ? image.url : ""} loading="lazy" />
            </div>
        </button>
    );
}

export default ImageButton;
