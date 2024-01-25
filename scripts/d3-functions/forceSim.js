import * as d3 from "d3";
// import { mexicoTopoFeatures } from "./mexicoTopoFeatures";
import { geoPathGen as geoPath } from "./projections";
import { getStateData } from "../../utilities";



function createSimulation() {

  const radScale = d3.scaleSqrt().domain([40500, 9000000]).range([5, 23]);

  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody().strength(0.5))
    .force(
      "x",
      d3.forceX().x((feature) => feature.centerX)
    )
    .force(
      "y",
      d3.forceY().y((feature) => feature.centerY)
    )
    .force(
      "collision",
      d3
        .forceCollide()
        .radius((d) => radScale(getStateData(d).population))
    );

    return simulation;
  }

  function runSimulation(data){
    const simulation = createSimulation();
    simulation.nodes(data);

    while (simulation.alpha() > 0.01) {
      simulation.tick();
    }
  }

export default runSimulation;
