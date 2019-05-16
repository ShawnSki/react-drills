import React from 'react';
import './index.css'

function Image (props) {
    return (
        <div>
            <img src={props.myImage}/>
    </div>
)
}

export default Image;