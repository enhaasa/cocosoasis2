
type Props = {
    image: {
        name: string
        url: string
    }
}

function ImageModal(props: Props) {
    const { image } = props;


    return (
        <div className="imageModal">
            <img src={image.url}>
            </img>
        </div>
    )


}

export default ImageModal;