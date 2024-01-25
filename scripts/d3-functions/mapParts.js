import { attrs, styles } from "./multiAttrsStyles";

function appendRegionPaths(
  selection,
  { groupId = null } = {},
  attrsObj = {},
  stylesObj = {}
) {
  const { topoFeatures, primaryID, geoPath } = selection.mapProps;

  const mapG = selection.append("g");

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
        `${geoPath.centroid(d.geometry)[0]} ${geoPath.centroid(d.geometry)[1]}`
    )
    .call(attrs, attrsObj)
    .call(styles, stylesObj);

  return regionPaths;
}

function appendRegionPoints(
  selection,
  { groupId = null, pointRadius = 0 } = {},
  attrsObj = {},
  stylesObj = {}
) {
  const { topoFeatures, primaryID, geoPath } = selection.mapProps;

  const mapPointsG = selection.append("g");

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

  return regionPoints;
}

export { appendRegionPaths, appendRegionPoints };
