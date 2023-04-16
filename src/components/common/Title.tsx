type Props = {
    text: string | JSX.Element;
    icon?: string;
    divider: boolean;
    underTitle?: string | JSX.Element;
}

function Title({ text, icon, underTitle, divider }:Props) {

    return (
        <div className="title">
            <div className="header">
                <span className="decoration left" />
                {text} {icon && <img className="icon" src={icon} />}
                <span className="decoration right"  />
            </div>
            {divider && <div className="divider" />}

            {underTitle &&
                <div className="underTitle">
                    {underTitle}
                </div>}
        </div>
    )
}

export default Title;