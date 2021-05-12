export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getPreviousElement = (array, element) => {
  return array[(array.indexOf(element) + array.length - 1) % array.length];
};

export const getNextElement = (array, element) => {
  return array[(array.indexOf(element) + 1) % array.length];
};

export const Repeat = (props) => {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return items;
};
