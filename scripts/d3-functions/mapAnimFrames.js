import { scaleOrdinal, transition, scaleLinear, scaleSqrt, scalePow } from "d3";
import { attrs, styles } from "./multiAttrsStyles";
import { getStateData } from "../../utilities";

const mapAnimFrames = {
  frame0: (vizSelections) => {
    const { mapPaths } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);

    mapPaths
      .transition()
      .duration(750)
      .call(attrs, {
        fill: colorScale(20.7),
        transform: "scale(1)",
      });
  }, 
  
  /* PROFESSOR, in case you want to update this, please also update mapPaths function in MapFrames.js */
  
  frame1: (vizSelections) => {
    const { mapPoints, mapPaths } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);

    mapPaths.transition().duration(750).call(attrs, {
      fill: (d) =>{
        switch(d.properties.Region){
          case 'North':
            return colorScale(16.1);
          case 'South':
            return colorScale(26.5);
          case 'Center':
            return colorScale(20.4);
          default:
            break;
        }
      },
    });

    mapPoints
      .transition()
      .duration(750)
      .call(attrs, {
        r: 0,
      });
  },

  frame2: (vizSelections) => {
    const { mapPaths, mapPoints } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);

    mapPaths.transition().duration(750).call(attrs, {
      fill: "#fff",
      stroke: "#eee",      
    });

    mapPoints
      .transition()
      .duration(750)
      .call(attrs, {
        fill: (d) => colorScale(getStateData(d).percentage),
        r: 10,
        cx: (d) => d.centerX,
        cy: (d) => d.centerY,
        scale: 1,
      }).call(styles, {
        opacity: 0.7
      });;
  },

  frame3: (vizSelections) => {
    const { mapPaths, mapPoints } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);
    const populationScale = scaleSqrt().domain([404274, 9284275]).range([5, 23]);

    mapPaths.transition().duration(750).call(attrs, {
      fill: "#fff",
      stroke: "#eee",      
    });

    mapPoints
      .transition()
      .duration(750)
      .call(attrs, {
        fill: (d) => colorScale(getStateData(d).percentage),
        r: (d) => populationScale(getStateData(d).population),
        cx: (d) => d.x,
        cy: (d) => d.y,
        scale: 1,
      }).call(styles, {
        opacity: 0.7
      });
  },

  frame4: (vizSelections) => {
    const { mapPaths, mapPoints } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);
    const populationScale = scaleSqrt().domain([404274, 9284275]).range([5, 23]);

    mapPaths.transition().duration(750).call(attrs, {
      fill: "#fff",
      stroke: "#eee",      
    });

    mapPoints
      .transition()
      .duration(750)
      .call(attrs, {
        fill: (d) => colorScale(d.properties.perc_fi_women_0_17),
        r: (d) => populationScale(getStateData(d, ['young']).population),
      }).call(styles, {
        opacity: 0.7
      });
  },

  frame5: (vizSelections) => {
    const { mapPaths, mapPoints } = vizSelections;
    const colorScale = scaleLinear().domain([10, 30]).range(['#D4E9FF', '#003966']);
    const populationScale = scaleSqrt().domain([404274, 9284275]).range([5, 23]);

    mapPaths.transition().duration(750).call(attrs, {
      fill: "#fff",
      stroke: "#eee",      
    });

    mapPoints
      .transition()
      .duration(750)
      .call(attrs, {
        fill: (d) => colorScale(getStateData(d, ['adult', 'old']).percentage),
        r: (d) => populationScale(getStateData(d, ['adult', 'old']).population),
      }).call(styles, {
        opacity: 0.7
      });
  }

};

export default mapAnimFrames;
