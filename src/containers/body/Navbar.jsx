import React from 'react';

const Navbar = (props) => {
  return (
      <nav className="menu-flex">
        <div className="nav">
            <div onClick={props.clickHome}>HOME</div>
            <div className="js-scroll-trigger" dest="about">O MNIE</div>
            <div className="js-scroll-trigger" dest="work">PRACA</div>
            <div className="js-scroll-trigger" dest="blog">BLOGI</div>
            <div className="js-scroll-trigger" dest="contact">KONTAKT</div>
        </div>
      </nav>
  );
};

export default Navbar;
