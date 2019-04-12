import React from 'react';

const Navbar = (props) => {
  return (
      <nav className="menu-flex">
        <div className="nav">
            <div onClick={props.clickHome}>HOME</div>
            <div className="js-scroll-trigger" sect="about">O MNIE</div>
            <div className="js-scroll-trigger" sect="work">PRACA</div>
            <div className="js-scroll-trigger" sect="blog">BLOGI</div>
            <div className="js-scroll-trigger" sect="contact">KONTAKT</div>
        </div>
      </nav>
  );
};

export default Navbar;
