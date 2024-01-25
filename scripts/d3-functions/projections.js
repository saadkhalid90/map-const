import { geoMercator, geoPath } from "d3";
/*projections
  you will have to adjust projection parameters (center and scale) 
  depending on the map you are creating
*/
const projection = geoMercator().center([-91.133209, 26.432608]).scale(1000);

// geoPath functions computed from projections
const geoPathGen = geoPath(projection);

export { projection, geoPathGen };
