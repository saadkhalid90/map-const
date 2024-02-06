import { GridCanvas } from "./scripts/gridCanvas";
import { select, scaleOrdinal, min, max } from "d3";
import election2018 from "./translatedGrids/elections2018_.json";
import contrast from "./scripts/contrastRatio";

const partyScale = scaleOrdinal()
  .domain([
    "PML-Q",
    "PPP",
    "PNA",
    "Ind",
    "IJI",
    "PDA",
    "MQM",
    "PML-N",
    "MMA",
    "PTI",
    "AL",
  ])
  .range([
    "#4CD0E0",
    "#757575",
    "#66BB6A",
    "#FBC02C",
    "#66BB6A",
    "#757575",
    "#F48FB1",
    "#66BB6A",
    "#4DB6AC",
    "#9D27B0",
    "#F48FB1",
  ]);

const getWord = (sentence, index) => sentence.split(" ")[index];

const elecGridCanvas = new GridCanvas({
  parentRef: document.querySelector("div#my-map"),
  containerClassName: "map-container",
  containerWidth: 1000,
  viewBoxWidth: 1280,
  viewBoxHeight: 1400,
  gridData: election2018,
  cellSize: 40,
  cellMargin: 1,
});

const getWinColor = (d) =>
  d.result.length === 0
    ? "#eeeeee"
    : partyScale.domain().includes(d.result[0].party)
    ? partyScale(d.result[0].party)
    : "#dddddd";

const gridGrps = elecGridCanvas
  .appendGridGrps({}, { id: (d) => `const-${d.id}` })
  .appendGridRects({
    fill: getWinColor,
  })
  .appendPropRects({
    fill: getWinColor,
  })
  .appendGridLabels(
    {},
    {
      fill: (d) => (contrast(getWinColor(d), "#000000") > 6 ? "black" : "#ddd"),
      dx: 19.5,
      dy: 25,
      "font-family": "sans-serif",
    },
    {
      "user-select": "none",
    }
  )
  .event(
    "gridGrps",
    "mouseover",
    (canvas) =>
      function () {
        const { mode } = canvas;
        const rectGrp = select(this);
        rectGrp.raise();
        rectGrp.append("title").text((d) => d.desc);
        const rect = rectGrp.select("rect.grid-rect");
        rect
          .attr("stroke", mode === "party" ? "#212121" : "grey")
          .attr("stroke-width", mode === "party" ? 5 : 4)
          .attr("rx", 1)
          .attr("ry", 1);
      }
  )
  .event(
    "gridGrps",
    "mouseout",
    (canvas) =>
      function () {
        const rect = select(this).select("rect.grid-rect");
        select("title").remove();
        rect.attr("stroke", "none").attr("rx", 0).attr("ry", 0);
      }
  );
//.updateMode("party");

select("button#mode-switch").on("click", function () {
  gridGrps.mode === "party"
    ? gridGrps.updateMode("turnout")
    : gridGrps.updateMode("party");
});

select("button#filter").on("click", function () {
  gridGrps.applyFilter({
    winnerArr: [],
    runnerUpArr: [],
  });
});
