import React from 'react';

var Child = React.forwardRef((props, ref) =>{
    return(
        <div>
            <input type ='text' ref={ref}></input>
        </div>
    )
})

export default Child;