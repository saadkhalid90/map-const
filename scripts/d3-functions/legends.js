import { select, selectAll, scaleSqrt, max } from "d3";

function appendCircLegend(
  selection,
  {
    positionX,
    positionY,
    radScaleFunc,
    inputArr,
    circPadding = 5,
    circLabelPaddingFactor = 1.3,
    legendTitle = "My legend",
    scaleVal = 1
  }
) {
  const legendGrp = selection
    .append("g")
    .attr("class", "circle-legend")
    .attr("transform", `translate(${positionX} ${positionY}) scale(${scaleVal})`);

  const maxVal = max(inputArr);
  const maxRadius = radScaleFunc(maxVal);
  const circGroupWidth = 2 * maxRadius + circPadding;

  legendGrp
    .append("text")
    .attr("class", "legend-title")
    .attr("transform", `translate(0 ${-0.4 * maxRadius})`)
    .attr("font-size", `${0.4 * maxRadius}px`)
    .text(legendTitle);

  const circGrps = legendGrp
    .selectAll("g")
    .data(inputArr)
    .join("g")
    .attr("transform", (d, i) => `translate(${i * circGroupWidth} 0)`);

  circGrps
    .append("circle")
    .attr("r", (d) => radScaleFunc(d))
    .attr("transform", `translate(${maxRadius} ${maxRadius})`)
    .attr("fill", "none")
    .attr("stroke", "#212121")
    .attr("stroke-width", "1px");

  circGrps
    .append("text")
    .attr(
      "transform",
      `translate(${maxRadius} ${circGroupWidth * circLabelPaddingFactor})`
    )
    .text((d) => d)
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("font-size", `${0.4 * maxRadius}px`);

  return legendGrp;
}

function appendDiscColorLegend(
  selection,
  {
    positionX,
    positionY,
    colorScaleFunc,
    inputArrLength = 20,
    legendStripWidth = 150,
    legendStripHeight = 15,
    legendTitle = "My legend",
    scaleVal = 1
  }
) {
  const domain = colorScaleFunc.domain();
  const domainRange = domain[1] - domain[0];
  const inputArr = [];
  for (let i = 1; i <= inputArrLength; i++) {
    inputArr.push(domain[0] + (domainRange / (inputArrLength + 1)) * i);
  }

  const legendGrp = selection
    .append("g")
    .attr("class", "disc-legend")
    .attr("transform", `translate(${positionX} ${positionY}) scale(${scaleVal})`);

  legendGrp
    .append("text")
    .attr("class", "legend-title")
    .attr("transform", `translate(0 -20)`)
    .attr("font-size", `12px`)
    .text(legendTitle);

  legendGrp
    .append("text")
    .attr("class", "legend-label")
    .attr("transform", `translate(0 -5)`)
    .attr("font-size", `8px`)
    .attr('text-anchor', 'middle')
    .text(domain[0]);

  legendGrp
    .append("text")
    .attr("class", "legend-label")
    .attr("transform", `translate(${legendStripWidth} -5)`)
    .attr("font-size", `8px`)
    .attr('text-anchor', 'middle')
    .text(domain[1]);

  const rectGrps = legendGrp
    .selectAll("g")
    .data(inputArr)
    .join("g")
    .attr(
      "transform",
      (d, i) => `translate(${(i * legendStripWidth) / inputArrLength} 0)`
    );

  rectGrps
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", legendStripWidth / inputArrLength)
    .attr("height", legendStripHeight)
    .attr("fill", (d) => colorScaleFunc(d));
}

export { appendCircLegend, appendDiscColorLegend };
