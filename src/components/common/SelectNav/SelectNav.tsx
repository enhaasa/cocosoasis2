type Option = {
    id: number,
    title: string,
    callback: (option:number) => any
}

type Props = {
    options: Option[]
    activeId: number
}

function SelectNav(props: Props) {
    const { options, activeId } = props;

    return(
        <nav className="selectNav">
            {options.map((option, index) => (
                <button 
                    className={`option ${index === activeId && "active"}`} 
                    key={`${option.title}${option.id}`}
                    onClick={() => {option.callback(option.id)}}>{option.title}
                </button>
            ))}
        </nav>
    )
}

export default SelectNav;