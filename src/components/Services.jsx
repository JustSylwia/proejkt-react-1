import React from "react";
import offers from "../data/offers";

const Services = () => {
  return (
    <div class="section-wrapper bg-blue">
      <section class="services" id="services">
        <h2 class="services-h2">Czym zajmuje się nasza firma?</h2>
        <ul class="services-boxes">
          {offers.map(({ id, name, isNew }) =>
            isNew ? (
              <li key={id}>
                <span class="services-box-reddot"></span>
                <span class="services-box-new">{name} (nowość)</span>
              </li>
            ) : (
              <li>{name}</li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default Services;
