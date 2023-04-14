type Props = {
    text: string | JSX.Element;
}

function Notice({ text }:Props) {
    return (
        <div className="notice">
            <span className="icon"></span>
            <span className="text">{text}</span>
        </div>
    )
}   

export default Notice; 