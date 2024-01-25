import { select } from "d3";
import { attrs, styles } from "./multiAttrsStyles";
import { geoPathGen as geoPath } from "./projections";
import { feature } from "topojson";

// utilty to extract an array of features from a TopoJSON JSON
// the features array is a required input for the MapCanvas construcotr
const getFeatures = ({ topoJSON, topoObjKey }) =>
  feature(topoJSON, topoJSON.objects[topoObjKey]).features;

// Class for MapCanvas
// Template for generating instances
class MapCanvas {
  constructor({
    parentRef,
    containerClassName = "map-container",
    containerWidth,
    viewBoxWidth,
    viewBoxHeight,
    topoFeatures,
    primaryID = "ADM1_PCODE", // this will change for each topojson file
  }) {
    const root = select(parentRef);
    const container = root
      .append("div")
      .attr("class", containerClassName)
      .style("width", containerWidth);

    const svg = container
      .append("svg")
      .style("width", "100%")
      .attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);

    Object.assign(this, {
      root,
      svg,
      topoFeatures,
      primaryID, // this is used to identify regions
      geoPath,
    });
  }

  addFeatureProp(propName, callback) { // this can be generalized to vizCanvas (something like addDataProp - features are essentially data);

    this.topoFeatures.forEach(
      (feature) => (feature[propName] = callback(feature))
    );
  }

  addCentroids() {
    const { geoPath } = this;
    this.addFeatureProp("centroid", (feature) => geoPath.centroid(feature));
  }

  remove() { // this can also be generalized to Viz canvas
    this.root.selectAll("*").remove();
    this.svg = null; // what about other additions (map parts?)
  }

  appendRegionPaths({ groupId = null } = {}, attrsObj = {}, stylesObj = {}) {
    const { svg, topoFeatures, primaryID, geoPath } = this;

    const mapG = svg.append("g");

    if (groupId) {
      mapG.attr("id", groupId);
    }

    const regionPaths = mapG
      .selectAll(`path.region`)
      .data(topoFeatures)
      .join("path")
      .attr("d", (d) => geoPath(d))
      .attr("class", "region")
      .attr("id", (d) => d.properties[primaryID])
      .attr("fill", "grey")
      .attr(
        "transform-origin",
        (d) =>
          `${geoPath.centroid(d.geometry)[0]} ${
            geoPath.centroid(d.geometry)[1]
          }`
      )
      .call(attrs, attrsObj)
      .call(styles, stylesObj);

    this.regionPaths = regionPaths; // is there needs to be a better way? This will overwrite everytime we call this method. What about multiple layers
    return this;
  }

  appendRegionPoints(
    { groupId = null, pointRadius = d => Math.random() * 12 } = {},
    attrsObj = {},
    stylesObj = {}
  ) {
    const { svg, topoFeatures, primaryID } = this;
    this.addCentroids();

    const mapPointsG = svg.append("g");

    if (groupId) {
      mapPointsG.attr("id", groupId);
    }

    const regionPoints = mapPointsG
      .selectAll(`circle.mapCircle`)
      .data(topoFeatures)
      .join("circle")
      .attr("cx", (d) => d.centroid[0])
      .attr("cy", (d) => d.centroid[1])
      .attr("r", pointRadius)
      .attr("class", "mapCircle")
      .attr("id", (d) => d.properties[primaryID])
      .attr("fill", "white")
      .call(attrs, attrsObj)
      .call(styles, stylesObj);

    this.regionPoints = regionPoints;

    return this;
  }

  addPoint(x, y, id) {
    this.svg.append("circle")
      .attr("id", `point-${id}`)
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 2)
      .attr("fill", "black");
  }

  event(selectionId, eventType, callback) {
    this[selectionId].on(eventType, callback);
    return this;
  }
}

export { getFeatures, MapCanvas };
