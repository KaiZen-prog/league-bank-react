import React from 'react';
import Block from './map.styled';

function Map() {
  return (
    <Block id="map">
      <Block.Header>Отделения Лига Банка</Block.Header>
      <Block.Iframe
        title="map"
        className="map__iframe"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A903677e276cd647a44c0897e60edad9ae34a0ebe73fde4d37f4ca90b4001c09f&amp;source=constructor"
      >
      </Block.Iframe>
    </Block>
  );
}

Map.displayName = 'Map';

export default Map;
