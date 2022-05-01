import React from "react";

const NavBar = () => {
  return (
    <div class="section-wrapper bg-gray">
      <nav class="nav">
        <div class="nav-logo">moja firma</div>
        <ul class="nav-links">
          <li>
            <a href="#about">o nas</a>
          </li>
          <li>
            <a href="#services">oferta</a>
          </li>
          <li>
            <a href="#" class="disabled">
              kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
