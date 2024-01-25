// This module contains any helper functions to modify and transform data

function createMapData(dataArray, id, mapFunction = null) {
  if (mapFunction) {
    dataArray = dataArray.map(mapFunction);
  }

  const dataMap = new Map();

  dataArray.map((datum) => {
    dataMap.set(datum[id], datum);
  });

  return dataMap;
}

function randRangeInt(min, max){
  const range = max - min;
  return Math.ceil(min + (Math.random() * range));
}

export { createMapData, randRangeInt };
