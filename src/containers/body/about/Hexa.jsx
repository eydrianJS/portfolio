import React from 'react';

const HexaItem = props => {
    return (
      <div className="flex-cechy">
        <div className="cecha">
          <i className={"mdi " + props.item} />
        </div>
        <div className="opis-cechy">ELDO</div>
        <div className="szeroki-opis-cechy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi saepe qui natus incidunt tempora voluptatem pariatur commodi? Ea, rerum ducimus! Provident consequatur quos doloremque fugiat quidem sequi quibusdam ducimus?</div>
        <div className="margin-effect"></div>
      </div>
    );
  };
  

export default HexaItem;