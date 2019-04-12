import React from 'react';

const Item = (props) => {
    return ( 
        <div className="project-border">
            <div className="image-border" style={{backgroundImage: `url(../img/${props.img})`}}>
            </div>
            {props.content}
        </div>
     );
}
 
export default Item;