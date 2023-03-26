import React from 'react';
import MenuItem from './_MenuItem';

const Page = React.forwardRef((props, ref) => {
    let {number, type, typeText, items} = props;

    
    const itemsAndSpacers= [];
    items.forEach((item, index) => {
        itemsAndSpacers.push(<MenuItem item={item} key={item.id}/>);

        //if (items.length === 1) return;
        if (items.length > 2 && index === items.length-1) return;
        itemsAndSpacers.push(<div className="spacer"></div>);
    })

    return (
        <div className={`page ${type}`} ref={ref}>

            <div className="content">
                    
                <div className={`header ${type}`}>
                    {typeText}
                </div>

                <div className="items">
                    {itemsAndSpacers}
                </div>


                <div className="footer">
                    <span className="pageNumber">
                        {number}
                    </span>
                    
                </div>
            </div>

        </div>
    );
});

export default Page;