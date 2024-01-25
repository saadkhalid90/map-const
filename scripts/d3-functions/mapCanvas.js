import { geoPathGen as geoPath } from "./projections";
import { select, selectAll } from "d3";

function appendMapCanvas({
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

  // assign some important properties that can be later used by appendRegionPaths and appendRegionCircles
  svg.mapProps = {
    topoFeatures,
    primaryID,
    geoPath
  };

  return svg;
}

function removeMapCanvas(parentRef) {
  const root = select(parentRef);
  root.selectAll("*").remove();
}

export { appendMapCanvas, removeMapCanvas}
