function attrs(selection, attrsObj) {
  if (!attrsObj) return;

  const attrsList = Object.entries(attrsObj);
  attrsList.forEach(([attr, value]) => {
    selection.attr(attr, value);
  });
}

function styles(selection, stylesObj) {
  if (!stylesObj) return;

  const stylesList = Object.entries(stylesObj);
  stylesList.forEach(([attr, value]) => {
    selection.style(attr, value); // error handling? how does d3 throw errors here
  });
}

export { attrs, styles };
