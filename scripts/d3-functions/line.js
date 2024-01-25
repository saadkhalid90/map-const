import { curveLinear, curveCardinal, line } from "d3";
import { attrs, styles } from "./multiAttrsStyles";

function appendLine(
  selection,
  {
    xVarName,
    yVarName,
    curveFunction = curveCardinal,
    idAsYVarName = true,
    attrsObj = {
      stroke: "black",
      "stroke-width": "1px",
    },
    stylesObj = {},
  }
) {
  const { data, x, y } = selection.chartProps;

  let lineGen = line()
    .curve(curveFunction)
    .y((d) => y(d[yVarName]))
    .x((d) => x(d[xVarName]));

  const linePath = lineGen(data);

  const lineChart = selection
    .append("path")
    .attr("d", linePath)
    .attr("class", "line")
    .attr("fill", "none")
    .call(attrs, attrsObj)
    .call(styles, stylesObj);

  const lineLength = lineChart.node().getTotalLength();

  lineChart
    .attr("stroke-dashoffset", lineLength)
    .attr("stroke-dasharray", lineLength);

  if (idAsYVarName) {
    lineChart.attr("id", yVarName);
  }

  lineChart.updateLineGen = function ({
    updXVarName = xVarName,
    updYVarName = yVarName,
  } = {}) {
    lineGen.y((d) => y(d[updYVarName])).x((d) => x(d[updXVarName]));
  };

  lineChart.update = function ({
    updXVarName = xVarName,
    updYVarName = yVarName,
    txDuration = 750,
    txEase,
    attrsObj = {},
    stylesObj = {},
  } = {}) {
    this.updateLineGen({ updXVarName, updYVarName });
    const linePath = lineGen(data);

    let lineSelection = txDuration
      ? this.transition().duration(txDuration)
      : this;

    if (txEase) {
      lineSelection = lineSelection.ease(txEase);
    }

    return lineSelection
      .call(attrs, { ...attrsObj, ...{ d: linePath } })
      .call(styles, stylesObj);
  };

  return lineChart;
}

export default appendLine;
