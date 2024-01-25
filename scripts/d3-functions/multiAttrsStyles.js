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
    selection.style(attr, value);
  });
}

export { attrs, styles };
