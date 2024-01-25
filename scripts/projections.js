import { geoMercator, geoPath } from "d3";
import { districtsTopo as districtsPak} from "../geo-data/districts";
/*projections
  you will have to adjust projection parameters (center and scale) 
  depending on the map you are creating
*/
const projection = geoMercator()
  .center([65, 35.5])
  .scale([150 * 35]);

// geoPath functions computed from projections
const geoPathGen = geoPath(projection);

export { projection, geoPathGen };
