import { attrs, styles } from "./multiAttrsStyles";
import { attr, style } from 'd3'; 

// function to update many selections to the same properties
function updMultiSections(selectionsArr, updateProps = {}) {
  selectionsArr.forEach((selection) => {
    // call the update method on each selection
    selection.update(updateProps);
  });
}

function applyAttributesAndStyles(array) {
  array.forEach((el) => {
    let element = el.element;
    let props = {        
      txDuration: el.tx || 750,
      attrsObj: {
        ...el.attrs
      },
      stylesObj: {
        ...el.styles
      }
    };

    if (element.length) {
      updMultiSections(element, props);
    }
    else {
      element.update(props);
    }
  })
}

function resetSelections(lines, dashAnimation, points, gaps, annotations) {
  lines.forEach((line) => {
    if (line.attr('stroke-dashoffset') !== 0) {
      let props = {};
      if (dashAnimation) {
        props = {
          attrsObj: {
            "stroke-dashoffset": function (d, i) {
              return this.getTotalLength();
            },
            "stroke-dasharray": function (d, i) {
              return this.getTotalLength();
            },
          },
          stylesObj: {
            opacity: 0
          }
        }
      }
      else {
        props = {
          stylesObj: {
            opacity: 0
          }
        }
      }
      line.update({
        txDuration: 600,
        ...props
      });
    }
  });

  points.forEach((point) => {
    if (point.attr('r') !== 0) {
      point.update({
        txDuration: 600,
        attrsObj: {
          r: 0,
        },
      });
    }
  });

  let opacity = gaps.concat(annotations);

  opacity.forEach((el) => {
    if (el.style('fill-opacity') !== 0) {
      el.update({
        txDuration: 600,
        stylesObj: {
          "fill-opacity": 0
        },
      });
    }
  });
}

const lineAnimFrames = {
  frame0: (vizSelections) => {
    const { lineM1, lineM2, lineF1, lineF2, pointsM1, pointsM2, pointsF1, pointsF2, gapArea1, gapArea2, annotations, lineChart, axisY } = vizSelections;
    const { annot1, annot2, annot3, annot4 } = annotations;

    resetSelections(
      [lineM2, lineF2, lineF1, lineM1], true, //Lines,
      [pointsM2, pointsF2, pointsF1, pointsM1], //Points
      [gapArea1, gapArea2], //Gaps
      [annot1, annot2, annot3, annot4]  //Annotations,
    );

    const { y } = lineChart.chartProps;
    y.domain([0, 0.15]);
    axisY.update({ txDuration: 750 });

  },

  frame1: (vizSelections) => {
    const { lineM1, lineM2, lineF1, lineF2, pointsM1, pointsM2, pointsF1, pointsF2, gapArea1, gapArea2, annotations, lineChart, axisY } = vizSelections;
    const { annot1, annot2, annot3, annot4 } = annotations;

    resetSelections(
      [lineM2, lineF1, lineM1], true, //Lines
      [pointsM2, pointsF1, pointsM1], //Points
      [gapArea1, gapArea2], //Gaps
      [annot1, annot3, annot4]  //Annotations
    );

    const { y } = lineChart.chartProps;
    y.domain([0, 0.15]);
    axisY.update({ txDuration: 750 });

    //Apply Styles for this stuff
    applyAttributesAndStyles([
      {
        element: lineF2,
        attrs: { 
          "stroke-dashoffset": 0,
        },
        styles: {
          opacity: 1
        }
      },
      {
        element: pointsF2,
        attrs: { 
          r: 3 
        }
      },
      {
        element: annot2,
        styles: { 
          "fill-opacity": 1,
        }
      }
    ]);
  },

  frame2: (vizSelections) => {
    const { lineM1, lineM2, lineF1, lineF2, pointsM1, pointsM2, pointsF1, pointsF2, gapArea1, gapArea2, annotations, lineChart, axisY } = vizSelections;
    const { annot1, annot2, annot3, annot4 } = annotations;

    const { y } = lineChart.chartProps;
    y.domain([0, 0.15]);
    axisY.update({ txDuration: 750 });

    resetSelections(
      [lineF1, lineM1], false, //Lines
      [pointsF1, pointsM1], //Points
      [gapArea1], //Gaps
      [annot4]  //Annotations
    );

    //Apply Styles for this stuff
    applyAttributesAndStyles([
      {
        element: [lineF2, lineM2],
        attrs: { "stroke-dashoffset": 0 },
        styles: { opacity: 1 }
      },
      {
        element: [pointsF2, pointsM2],
        attrs: { r: 3 }
      },
      {
        element: gapArea2,
        styles: { "fill-opacity": 1,}
      },
      {
        element: annot1,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(0px)"
        }
      },
      {
        element: annot2,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(0px)"
        }
      },
      {
        element: annot3,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(0px)"
        }
      }
    ]);    
  },

  frame3: (vizSelections) => {
    const { lineM1, lineM2, lineF1, lineF2, pointsM1, pointsM2, pointsF1, pointsF2, gapArea1, gapArea2, annotations, lineChart, axisY } = vizSelections;
    const { annot1, annot2, annot3, annot4 } = annotations;

    const { y } = lineChart.chartProps;
    //update chart domain
    const newDomain = [0, 0.5];
    y.domain(newDomain);
    axisY.update({ txDuration: 750 });

    resetSelections(
      [lineF2, lineM2], false, //Lines
      [pointsF2, pointsM2], //Points
      [gapArea2], //Gaps
      [annot4]  //Annotations
    );


    //Apply Styles for this stuff
    applyAttributesAndStyles([
      {
        element: [lineF1, lineM1],
        attrs: { 
          "stroke-dashoffset": 0,
        },
        styles: {
          opacity: 1
        }
      },
      {
        element: [pointsF1, pointsM1],
        attrs: { 
          r: 3 
        }
      },
      {
        element: gapArea1,
        styles: { 
          "fill-opacity": 1,
        }
      },
      {
        element: annot1,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(30px)"
        },
      },
      {
        element: annot2,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(-5px)"
        },
      },
      {
        element: annot3,
        styles: { 
          "fill-opacity": 1,
          'transform': "translateY(14px)"
        },
      }
    ]); 
  },

  frame4: (vizSelections) => {
    const { lineM1, lineM2, lineF1, lineF2, pointsM1, pointsM2, pointsF1, pointsF2, gapArea1, gapArea2, annotations, lineChart, axisY } = vizSelections;
    const { annot1, annot2, annot3, annot4 } = annotations;

    const { y } = lineChart.chartProps;
    //update chart domain
    const newDomain = [0, 0.5];
    y.domain(newDomain);
    axisY.update({ txDuration: 750 });

    resetSelections(
      [lineF2, lineM2, lineF1, lineM1], false, //Lines
      [pointsM1, pointsF1, pointsF2, pointsM2], //Points
      [gapArea2], //Gaps
      [annot2, annot3]  //Annotations
    );

    applyAttributesAndStyles([
      {
        element: [annot4, annot1, gapArea1],
        styles: {
          "fill-opacity": 1,
        },
      }
    ]); 
  },
};

export default lineAnimFrames;
