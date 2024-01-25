import { getFeatures, MapCanvas } from "./scripts/mapCanvas";
import { districtsTopo as pakDistricts } from "./geo-data/districts";
import { select } from "d3";
import { attrs } from "./scripts/multiAttrsStyles";
import { projection } from "./scripts/projections";
import kpPunjab77 from "./locs-data/kpPunjab-77";
import locs77 from "./locs-data/locs77";

const locsArr = [];

const pakDistFeatures = getFeatures({
  topoJSON: pakDistricts,
  topoObjKey: "pakistan_districts",
}).filter(
  (feature) =>
    !["Azad Jammu & Kashmir", "Gilgit-Baltistan"].includes(
      feature.properties.province_territory
    )
);

console.log(
  new Set(pakDistFeatures.map((d) => d.properties.province_territory))
);

const pakMapCanvas = new MapCanvas({
  parentRef: document.querySelector("div#my-map"),
  containerClassName: "map-container",
  containerWidth: 2000,
  viewBoxWidth: 2000,
  viewBoxHeight: 2000,
  topoFeatures: pakDistFeatures,
  primaryID: "objectid", // this will change for each topojson file
});

pakMapCanvas.appendRegionPaths();

// const circs = pakMapCanvas.svg.selectAll("circle")
//   .attr("class", "const-loc")
//   .data(locs77)
//   .enter()
//   .append("circle")
//   .attr("cx", d => projection(d.location)[0])
//   .attr("cy", d => projection(d.location)[1])
//   .attr("r", 3)
//   .attr("fill", "#212121")
//   .attr("fill-opacity", 0.5);



pakMapCanvas
  .event("regionPaths", "click", (e) => {
    const { scrollTop, scrollLeft } = document.documentElement;
    const locId = locsArr.length + 1;
    console.log(scrollLeft, scrollTop);
    pakMapCanvas.addPoint(e.clientX + scrollLeft, e.clientY + scrollTop, locId);
    locsArr.push({
      id: locId,
      location: projection.invert([e.clientX + scrollLeft, e.clientY + scrollTop]),
    });
    console.log(locsArr);
    console.log(JSON.stringify(locsArr));
    select("h1#na-prog").html(`${locsArr.length}`);
  })
  .event("regionPaths", "mouseover", function (e) {
    pakMapCanvas.svg
      .append("title")
      .text(select(this).datum().properties.districts);
  })
  .event("regionPaths", "mouseout", function (e) {
    pakMapCanvas.svg.select("title").remove();
  });


select("h1#na-prog").on("click", (e) => {
  select(`circle#point-${locsArr.length}`).remove();
  locsArr.pop();
  select("h1#na-prog").html(`${locsArr.length}`);
});
// .event("regionPaths", "mouseover", function (e) {
//   select(this).attr("fill", "black");
// })
// .event("regionPaths", "mouseout", function (e) {
//   select(this).attr("fill", "grey");
// });
