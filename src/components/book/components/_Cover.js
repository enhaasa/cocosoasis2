import React from 'react';

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page cover" ref={ref} data-density="hard">
            <div className="content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

export default PageCover;