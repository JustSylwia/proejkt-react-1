import React from "react";

const Service = ({ id, name, isNew }) => {
  return (
    <>
      {isNew ? (
        <li key={id}>
          <span class="services-box-reddot"></span>
          <span class="services-box-new">{name} (nowość)</span>
        </li>
      ) : (
        <li>{name}</li>
      )}
    </>
  );
};

export default Service;
