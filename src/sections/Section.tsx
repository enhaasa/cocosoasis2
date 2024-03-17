type Props = {
    title: string | null;
    id: string;
    content: JSX.Element | null;
};

function Section(props: Props) {
    const { title, id, content } = props;

    return (
        <section>
            <div id={`${id}`} className="anchor">anchor</div>
            <div className={`wrapper ${id}`}>
                {title &&
                    <div className="h-divider" >
                        <div className="shadow"></div>
                        <div className="text"><i>{title}</i></div>
                    </div>}
                {content}
            </div>
        </section>

    )
}

export default Section;