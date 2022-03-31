export const handle = (_ref) => {
  const textarray = _ref.current.textContent.split("");
  _ref.current.textContent = "";
  textarray.forEach((item, index) => {
    _ref.current.innerHTML +=
      '<span style="transform:rotate(' +
      (index + 1) * 20 +
      'deg)">' +
      item +
      "</span>";
  });
};
