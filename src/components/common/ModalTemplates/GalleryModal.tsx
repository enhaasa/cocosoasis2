import { useState } from 'react';
import ImageModal from './ImageModal';

type Image = {
    name: string
    url: string
}

type Props = {
    images: Image[]
}

function GalleryModal(props: Props) {
    const { images } = props;

    const [ selectedIndex, setSelectedIndex ] = useState<number>(0);
    const currentImage = images[selectedIndex];
    
    return (
        <div className="galleryModal">
            <ImageModal image={{name: currentImage.name, url: currentImage.url}}/>

            <nav>
                {images.map((image, index) => (
                    <button onClick={() => {setSelectedIndex(index)}} className="dot">{image.name}</button>
                ))}
            </nav>
        </div>
    )


}

export default GalleryModal;