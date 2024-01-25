import { attrs, styles } from "./multiAttrsStyles";

function appendPoints(
  selection,
  {
    xVarName,
    yVarName,
    classAsYVarName = true,
    addClasses,
    attrsObj = {
      r: 0, // either a function or a constant integer,
      fill: "black",
      stroke: "none",
      "stroke-width": 0,
    },
    stylesObj = {},
  }
) {
  const { data, x, y } = selection.chartProps;

  const points = selection
    .selectAll(`circle.point${classAsYVarName ? `.${yVarName}` : ""}`)
    .data(data)
    .join("circle")
    .attr("class", "point")
    .attr("cx", (d) => x(d[xVarName]))
    .attr("cy", (d) => y(d[yVarName]))
    .call(attrs, attrsObj)
    .call(styles, stylesObj);

  if (classAsYVarName) {
    points.classed(yVarName, true);
  }

  if (addClasses) {
    points.classed(yVarName, true);
  }

  points.update = function ({
    updXVarName = xVarName,
    updYVarName = yVarName,
    txDuration = 750,
    txEase,
    attrsObj = {},
    stylesObj = {},
  } = {}) {
    // setting up the selection for update (transition or abrupt)
    let pointsSelection = txDuration
      ? this.transition().duration(txDuration)
      : this;

    if (txEase) {
      pointsSelection = pointsSelection.ease(txEase);
    }

    return pointsSelection
      .attr("cx", (d) => x(d[updXVarName]))
      .attr("cy", (d) => y(d[updYVarName]))
      .call(attrs, attrsObj)
      .call(styles, stylesObj);
  };

  return points;
}

export default appendPoints;
