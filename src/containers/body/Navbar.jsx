import React from 'react';

const Navbar = (props) => {
  return (
      <nav className="menu-flex">
        <div className="nav">
            <div onClick={props.clickHome}>HOME</div>
            <div>O MNIE</div>
            <div>PRACA</div>
            <div>BLOGI</div>
            <div>KONTAKT</div>
        </div>
      </nav>
  );
};

export default Navbar;
