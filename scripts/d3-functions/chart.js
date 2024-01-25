import { foodInsRates } from "../data-js-files/foodInsRates";
import {
  select,
  selectAll,
  scaleLinear,
  scaleTime,
  axisLeft,
  axisBottom,
} from "d3";

function appendChart({
  parentRef,
  containerClassName = "chart",
  parentWidth = "100%",
  viewBoxWidth = 800,
  viewBoxHeight = 500,
  margin = {
    top: 100,
    bottom: 50,
    left: 150,
    right: 150,
  },
  data = foodInsRates,
  xScaleFunc = scaleLinear,
  xDomain = [new Date(2015, 0), new Date(2020, 0)],
  yScaleFunc = scaleTime,
  yDomain = [0, 0.15],
  title = 'Prevalence of Food Insecurity in Mexico By Sex (2015 - 2020)'

}) {
  const width = viewBoxWidth - margin.left - margin.right;
  const height = viewBoxHeight - margin.top - margin.bottom;

  const root = select(parentRef);
  const svgContainer = root
    .append("div")
    .attr("class", containerClassName)
    .style("width", parentWidth);

  const svg = svgContainer
    .append("svg")
    .attr("class", "chart-svg")
    .attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);

  const svgG = svg
    .append("g")
    .attr("class", "chart-svg-g")
    .attr("transform", `translate(${margin.left} ${margin.top})`);

  const y = xScaleFunc().domain(yDomain).range([height, 0]);
  const x = yScaleFunc().domain(xDomain).range([0, width]);

  svgG.chartProps = { data, y, x, margin, width, height };

  svgG
    .append("text")
    .attr("class", "chart-title")
    .attr("x", 0)
    .attr("y", 0)
    .attr("fill", "black")
    .attr("transform", `translate(${-margin.left * 0.6} ${-30})`)
    .text(title);

  return svgG;
}

function removeChart(parentRef) {
  const root = select(parentRef);
  root.selectAll("*").remove();
}

function appendChartGroup(selection, groupId) {
  const chartGrp = selection.append("g").attr("id", groupId);
  chartGrp.chartProps = selection.chartProps;

  return chartGrp;
}

function appendAxis(
  selection,
  {
    type,
    grid = true,
    ticks,
    tickFormat,
    domainLine = true,
    tickLines = true,
    yAxisMarginFactor = 0.4,
    axisTitle
  } = {}
) {
  // getting chart properties from the chart selection
  const { y, x, height, width, margin } = selection.chartProps;

  // some helper function to remove domian/ tick lines and add gridLines if needed
  function removeDomainLine(g) {
    g.selectAll(".domain").remove();
  }
  function removeTickLines(g) {
    g.selectAll(".tick").select("line").remove();
  }
  function addGridLines(g, type) {
    g.selectAll(".tick line")
      .clone() // cloning already present tick lines and using them as grid
      .attr(
        `${type === "x" ? "y" : "x"}2`,
        type === "x" ? -height : width + 2 * yAxisMarginFactor * margin.left
      )
      .attr("stroke-opacity", 0.15);
  }
  // modify axisGroup based on users settings of grid, domainLine and tickLines
  // 1. grid. domainLine and tickLines come from the appendAxis Function's arguments
  // 2. removeDomainLine, removeTickLines and addGridLines functions are defined at the
  // top of appendAxis function
  function setUpAxisGroup(axisG) {
    if (grid) {
      axisG.call(removeDomainLine).call(addGridLines);
    }
    if (!domainLine) {
      removeDomainLine(axisG);
    }
    if (!tickLines) {
      removeTickLines(axisG);
    }
  }

  const axisFunc = type === "x" ? axisBottom : axisLeft;
  const scale = type === "x" ? x : y;
  const id = type === "x" ? "x-axis-g" : "y-axis-g";
  const translateTxt =
    type === "x"
      ? `translate(${0} ${height})`
      : `translate(${-margin.left * yAxisMarginFactor} 0)`;

  const axisG = selection.append("g").attr("id", id);

  const axisCall = axisFunc(scale);

  if (ticks) {
    axisCall.ticks(ticks, tickFormat);
  }

  axisG.attr("class", "axis-g").attr("transform", translateTxt).call(axisCall);
  setUpAxisGroup(axisG);

  if (axisTitle){
    axisG.append("text")
    .attr("class", "axisLabel")
    .attr("fill", "black")
    .attr("font-size", "12px")
    .attr("transform", "translate(0, 35)")
    .text(axisTitle);
  }

  // defining an axis transition function on the axis's group selection
  axisG.update = function ({ txDuration, txEase }) {
    const axisCall = axisFunc(scale);

    if (ticks) {
      axisCall.ticks(ticks, tickFormat);
    }

    let axisGSelection = txDuration
      ? this.transition().duration(txDuration)
      : this;

    if (txEase) {
      axisGSelection = axisGSelection.ease(txEase);
    }
    axisGSelection.call(axisCall);

    setUpAxisGroup(this);
  };

  return axisG;
}

export { appendChart, removeChart, appendChartGroup, appendAxis };
