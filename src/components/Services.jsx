import React from "react";
import offers from "../data/offers";
import Service from "./Service";

const Services = () => {
  return (
    <div class="section-wrapper bg-blue">
      <section class="services" id="services">
        <h2 class="services-h2">Czym zajmuje się nasza firma?</h2>
        <ul class="services-boxes">
          {offers.map(({ id, name, isNew }) => (
            <Service id={id} name={name} isNew={isNew} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Services;
