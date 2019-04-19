import React from 'react';

const HexaItem = props => {
    return (
      <div className="flex-cechy">
        <div className="cecha">
          <i className={"mdi " + props.item} />
        </div>
        <div className="opis-cechy">{props.label}</div>
        <div className="szeroki-opis-cechy">{props.content}</div>
        <div className="margin-effect"></div>
      </div>
    );
  };
  

export default HexaItem;