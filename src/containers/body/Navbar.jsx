import React, { useState, useEffect } from "react";

const Navbar = props => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className={openMenu ? "menu-flex"  : "menu-flex-none" }>
        <div className="nav">
          <div onClick={props.clickHome}>HOME</div>
          <div
            className="js-scroll-trigger"
            dest="about"
            onClick={() => setOpenMenu(false)}
          >
            O MNIE
          </div>
          <div
            className="js-scroll-trigger"
            dest="work"
            onClick={() => setOpenMenu(false)}
          >
            PRACA
          </div>
          <div
            className="js-scroll-trigger"
            dest="blog"
            onClick={() => setOpenMenu(false)}
          >
            BLOGI
          </div>
          <div
            className="js-scroll-trigger"
            dest="contact"
            onClick={() => setOpenMenu(false)}
          >
            KONTAKT
          </div>
        </div>
      </nav>
      <div className="menu">
        {openMenu ? (
          <i className="mdi mdi-mixer" onClick={() => setOpenMenu(!openMenu)} />
        ) : (
          <i className="mdi mdi-menu" onClick={() => setOpenMenu(!openMenu)} />
        )}
      </div>
    </>
  );
};

export default Navbar;
