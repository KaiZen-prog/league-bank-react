import React from "react";

const Map = () => {
  return (
    <section className="map" id="map">
      <h2 className="map__header">Отделения Лига Банка</h2>
      <div className="map__container">
        <ul className="map__pin-list">
          <li className="map__pin map__pin--1"></li>
          <li className="map__pin map__pin--2"></li>
          <li className="map__pin map__pin--3"></li>
          <li className="map__pin map__pin--4"></li>
          <li className="map__pin map__pin--5"></li>
        </ul>
      </div>
    </section>
  );
};

Map.displayName = `Map`;

export default Map;
