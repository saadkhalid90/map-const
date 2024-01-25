import { appendChart, appendChartGroup, appendAxis } from "./chart";
import appendPoints from "./points";
import appendLine from "./line";
import appendArea from "./area";
import addAnnotations from "./annotations";
import { appendDiscColorLegend } from "./legends";
import { ScaleLinear, scaleLinear } from "d3";

function lineChartSetup({ parentRef }) {
  const lineChart = appendChart({
    parentRef: parentRef,
  });

  const pointAttrs = { fill: "white", "stroke-width": "2px" };
  const lineAttrs = { "stroke-width": "2px" };

  const areaGrp = appendChartGroup(lineChart, "areaG");
  const lineGrp = appendChartGroup(lineChart, "lineG");
  const pointsGrp = appendChartGroup(lineChart, "pointsG");
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
    axisTitle: "(Year)"
  });

  const gapArea1 = appendArea(areaGrp, {
    xVarName: "year",
    y0VarName: "male_sev_mod",
    y1VarName: "female_sev_mod",
    areaId: "mod-sev-gap-area",
  });

  const gapArea2 = appendArea(areaGrp, {
    xVarName: "year",
    y0VarName: "male_sev",
    y1VarName: "female_sev",
    areaId: "sev-gap-area",
    stylesObj: { "fill-opacity": 0 },
  });

  const lineF1 = appendLine(lineGrp, {
    xVarName: "year",
    yVarName: "female_sev_mod",
    attrsObj: {
      stroke: "#D16C00",
      ...lineAttrs,
    },
  });

  const lineM1 = appendLine(lineGrp, {
    xVarName: "year",
    yVarName: "male_sev_mod",
    attrsObj: {
      stroke: "#003966",
      ...lineAttrs,
    },
  });

  const lineF2 = appendLine(lineGrp, {
    xVarName: "year",
    yVarName: "female_sev",
    attrsObj: {
      stroke: "#D16C00",
      ...lineAttrs,
    },
  });

  const lineM2 = appendLine(lineGrp, {
    xVarName: "year",
    yVarName: "male_sev",
    attrsObj: {
      stroke: "#003966",
      ...lineAttrs,
    },
  });

  const pointsF1 = appendPoints(pointsGrp, {
    xVarName: "year",
    yVarName: "female_sev_mod",
    attrsObj: {
      stroke: "#D16C00",
      ...pointAttrs,
    },
  });

  const pointsM1 = appendPoints(pointsGrp, {
    xVarName: "year",
    yVarName: "male_sev_mod",
    attrsObj: {
      stroke: "#003966",
      ...pointAttrs,
    },
  });

  const pointsF2 = appendPoints(pointsGrp, {
    xVarName: "year",
    yVarName: "female_sev",
    attrsObj: {
      stroke: "#D16C00",
      ...pointAttrs,
    },
  });

  const pointsM2 = appendPoints(pointsGrp, {
    xVarName: "year",
    yVarName: "male_sev",
    attrsObj: {
      stroke: "#003966",
      ...pointAttrs,
    },
  });

  const annotations = addAnnotations(lineChart, [
    {
      text: "Gender Gap",
      attrsObj: {
        x: 280,
        y: 80,
        fill: "grey",
        "font-size": "13px",
      },
      stylesObj: {
        "fill-opacity": 0
      }
    },
    {
      text: "Women (Age 15 or over)",
      attrsObj: {
        x: 510,
        y: 92,
        fill: "#D16C00",
        "font-size": "0.80em",
      },
      stylesObj: {
        "fill-opacity": 0
      }
    },
    {
      text: "Men (Age 15 or over)",
      attrsObj: {
        x: 510,
        y: 162,
        fill: "#003966",
        "font-size": "0.80em",
      },
      stylesObj: {
        "fill-opacity": 0
      }
    },
    {
      text: "12.3%",
      attrsObj: {
        x: 510,
        y: 132,
        fill: "black",
        "font-size": "1.2em",
      },
      stylesObj: {
        "fill-opacity": 0
      }
    },
    {
      text: "3%",
      attrsObj: {
        x: 510,
        y: 128,
        fill: "black",
        "font-size": "1.25em",
      },
      stylesObj: {
        "fill-opacity": 0
      }
    },
  ]);

  return {
    lineChart,
    pointsF1,
    pointsF2,
    pointsM1,
    pointsM2,
    lineF1,
    lineF2,
    lineM1,
    lineM2,
    gapArea1,
    gapArea2,
    axisY,
    axisX,
    annotations
  };
}

export default lineChartSetup;
