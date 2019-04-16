import React from 'react';

const Button = (props) => {
    return ( 
        <button type="submit" onClick={props.click}>{props.name}<i className="mdi mdi-arrow-right"></i></button>
     );
}
 
export default Button;