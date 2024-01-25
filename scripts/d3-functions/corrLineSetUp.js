import { appendChart, appendChartGroup, appendAxis } from "./chart";
import appendLine from "./line";
import hungerViolence from "../data-js-files/hungerViolence";
import { curveLinear, format } from "d3";

function corrLineChartSetup({ parentRef }) {
  const lineChart = appendChart({
    parentRef: parentRef,
    data: hungerViolence,
    xDomain: [new Date(2010, 0), new Date(2020, 0)],
    yDomain: [0, 0.4],
    title: 'Average Food Insecurity and Domestic Violance by Period'
  });

  const lineAttrs = { "stroke-width": "2px" };

  const axisY = appendAxis(lineChart, {
    type: "y",
    ticks: 5,
    tickFormat: "%",
    tickLines: false,
  });
  const axisX = appendAxis(lineChart, {
    type: "x",
    grid: false,
    domainLine: false,
    tickLines: false,
    axisTitle: "(Year)",
    ticks : 3,
  });

  const lineHunger = appendLine(lineChart, {
    xVarName: "year",
    yVarName: "avgHunger_National",
    attrsObj: {
      stroke: "#D16C00",
      ...lineAttrs,
    },
    curveFunction : curveLinear,
  });

  const lineViol = appendLine(lineChart, {
    xVarName: "year",
    yVarName: "avgViolence_National",
    attrsObj: {
      stroke: "#003966",
      ...lineAttrs,
    },
    curveFunction : curveLinear,
  });

  lineHunger.update({
    attrsObj: {
      "stroke-dashoffset": 0,
    },
  });

  lineViol.update({
    attrsObj: {
      "stroke-dashoffset": 0,
    },
  });

  return {
    lineHunger,
    lineViol,
    axisY,
    axisX,
  };
}

export default corrLineChartSetup;
