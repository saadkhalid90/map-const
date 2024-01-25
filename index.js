import { feature } from "topojson";
import { districtsTopo as pakDistricts } from "./geo-data/districts";

const getFeatures = ({ topoJSON, topoObjKey }) =>
  feature(topoJSON, topoJSON.objects[topoObjKey]).features;

const pakDistFeatures = getFeatures({
  topoJSON: pakDistricts,
  topoObjKey: "pakistan_districts",
});

console.log(pakDistFeatures);
