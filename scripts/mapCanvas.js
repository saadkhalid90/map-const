import { geoPathGen as geoPath } from "./projections";
import { select } from "d3";
import { attrs, styles } from "./multiAttrsStyles";

class MapCanvas {
  constructor({
    parentRef,
    containerClassName = "mexicoMapC",
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
      primaryID,
      geoPath,
    });
  }

  remove() {
    this.root.selectAll("*").remove();
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
      .attr("fill", "black")
      .attr(
        "transform-origin",
        (d) =>
          `${geoPath.centroid(d.geometry)[0]} ${
            geoPath.centroid(d.geometry)[1]
          }`
      )
      .call(attrs, attrsObj)
      .call(styles, stylesObj);

    this.regionPaths = regionPaths;
    return this;
  }

  appendRegionPoints(
    { groupId = null, pointRadius = 0 } = {},
    attrsObj = {},
    stylesObj = {}
  ) {
    const { svg, topoFeatures, primaryID, geoPath } = this;

    const mapPointsG = svg.append("g");

    if (groupId) {
      mapPointsG.attr("id", groupId);
    }

    const regionPoints = mapPointsG
      .selectAll(`circle.mapCircle`)
      .data(topoFeatures)
      .join("circle")
      .attr("cx", (d) => d.centerX)
      .attr("cy", (d) => d.centerY)
      .attr("r", pointRadius)
      .attr("class", "mapCircle")
      .attr("id", (d) => d.properties[primaryID])
      .attr("fill", "white")
      .call(attrs, attrsObj)
      .call(styles, stylesObj);

      this.regionPoints = regionPoints;

      return this;
  }
}

export { MapCanvas };
