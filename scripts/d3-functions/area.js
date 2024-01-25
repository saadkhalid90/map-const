import { curveLinear, curveCardinal, area } from "d3";
import { attrs, styles } from "./multiAttrsStyles";

function appendArea(
  selection,
  {
    xVarName,
    y0VarName,
    y1VarName,
    curveFunction = curveCardinal,
    areaId,
    attrsObj = { fill: "#FCE4EC" },
    stylesObj = {},
  }
) {
  const { data, x, y } = selection.chartProps;

  const areaGen = area()
    .curve(curveFunction)
    .x((d) => x(d[xVarName]))
    .y1((d) => y(d[y1VarName]))
    .y0((d) => y(d[y0VarName]));

  const areaPath = areaGen(data);

  const areaChart = selection
    .append("path")
    .attr("d", areaPath)
    .attr("class", "area")
    .call(attrs, attrsObj)
    .call(styles, stylesObj);

  if (areaId) {
    areaChart.attr("id", areaId);
  }

  areaChart.updateAreaGen = function ({
    updXVarName = xVarName,
    updY1VarName = y1VarName,
    updY0VarName = y0VarName,
  } = {}) {
    areaGen
      .x((d) => x(d[updXVarName]))
      .y1((d) => y(d[updY1VarName]))
      .y0((d) => y(d[updY0VarName]));
  };

  areaChart.update = function (
    {
      updXVarName = xVarName,
      updY1VarName = y1VarName,
      updY0VarName = y0VarName,
      attrsObj = {},
      stylesObj = {},
    } = {},
    { duration = 750 } = {}
  ) {
    this.updateAreaGen({
      updXVarName,
      updY1VarName,
      updY0VarName,
    });
    const areaPath = areaGen(data);
    return this.transition()
      .duration(duration)
      .attr("d", areaPath)
      .call(attrs, attrsObj)
      .call(styles, stylesObj);
  };

  return areaChart;
}

export default appendArea;
