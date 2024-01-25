import { attrs, styles } from "./multiAttrsStyles";

function addAnnotations(selection, definitions = []) {
  const { x, y } = selection.chartProps;

  const annotationsG = selection.append("g").attr("class", "annotations-g");

  const annotSelections = {};
  definitions.forEach((definition, index) => {
    const { text, attrsObj, stylesObj } = definition;
    const currAnnot = annotationsG
      .append("text")
      .text(text)
      .call(attrs, attrsObj)
      .call(styles, stylesObj);

    currAnnot.update = function ({ txDuration, txEase, attrsObj, stylesObj }) {
      let annotSel = txDuration ? this.transition().duration(txDuration) : this;
      if (txEase) {
        let annotSel = annotSel.ease(txEase);
      }

      return annotSel.call(attrs, attrsObj).call(styles, stylesObj);
    };

    annotSelections[`annot${index + 1}`] = currAnnot;
  });

  return annotSelections;
}

export default addAnnotations;
