type Option = {
    id: number,
    title: string,
    callback: (option:number) => any
}

type Props = {
    options: Option[]
    activeId: number
}

function SelectNav({ options, activeId }: Props) {

    return(
        <div className="selectNavWrapper">
            <nav className="selectNav">
                {options.map((option, index) => (
                    <button 
                        className={`option ${index === activeId ? "active" : "inactive"}`} 
                        key={`${option.title}${option.id}`}
                        onClick={() => {option.callback(option.id)}}>{option.title}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default SelectNav;