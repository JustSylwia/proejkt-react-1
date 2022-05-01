import React from "react";

const Header = () => {
  return (
    <div class="section-wrapper bg-background">
      <header class="header">
        <h1 class="header-h1">
          Nasza firma oferuje najwyższej
          <br />
          jakości produkty.
        </h1>
        <h2 class="header-h2">Nie wierz nam na słowo - sprawdź</h2>
        <a href="#services" class="header-btn">
          <button class="header-btn-inside">oferta</button>
        </a>
      </header>
    </div>
  );
};

export default Header;
