import { useState } from 'react';
import ImageModal from './ImageModal';
import arrowRight from './../../../icons/arrow-white-right.webp';
import arrowLeft from './../../../icons/arrow-white-left.webp';

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

    function handleNextImage() {
        if (selectedIndex === images.length -1) {
            setSelectedIndex(0);
        } else {
            setSelectedIndex(prev => prev + 1);
        }
    }

    function handlePreviousImage() {
        if (selectedIndex === 0) {
            setSelectedIndex(images.length -1);
        } else {
            setSelectedIndex(prev => prev - 1);
        }
    }
    
    return (
        <div className="galleryModal">
            <div className="image">
                <nav className="topNav">
                    <button onClick={() => handlePreviousImage()}><img className="arrow" src={arrowLeft} /></button>
                    <button onClick={() => handleNextImage()}><img className="arrow" src={arrowRight} /></button>
                </nav>
                <ImageModal image={{name: currentImage.name, url: currentImage.url}} />

            </div>

            <nav className="bottomNav">
                {images.map((image, index) => (
                    <button 
                        onClick={() => {setSelectedIndex(index)}} 
                        className={`dot ${index === selectedIndex && "active"}`}>&bull;</button>
                ))}
            </nav>
        </div>
    )


}

export default GalleryModal;