
type Props = {
    image: {
        name: string
        url: string
    },
    shadow?: boolean
}

function ImageModal(props: Props) {
    const { image, shadow } = props;

    return (
        <div className={`imageModal ${shadow && "shadow"}`}>
            <a href={image.url} target="_blank" rel="noreferrer">
                <img src={image.url} alt="">
                </img>
            </a>
        </div>
    )


}

export default ImageModal;