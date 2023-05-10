import React from 'react';
import {MapBlock, Header, Iframe} from './map.styled';

const Map: React.FunctionComponent = () => {
  return (
    <MapBlock id="map">
      <Header>Отделения Лига Банка</Header>
      <Iframe
        title="map"
        className="map__iframe"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A903677e276cd647a44c0897e60edad9ae34a0ebe73fde4d37f4ca90b4001c09f&amp;source=constructor"
      >
      </Iframe>
    </MapBlock>
  );
}

Map.displayName = 'Map';

export default Map;
