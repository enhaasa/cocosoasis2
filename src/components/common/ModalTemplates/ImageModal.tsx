
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
            <a href={image.url} target="_blank">
                <img src={image.url}>
                </img>
            </a>
        </div>
    )


}

export default ImageModal;