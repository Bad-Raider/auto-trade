const inspectionBtns = document.querySelectorAll(".inspection-discription__btn");
const inspectionTexts = document.querySelectorAll(".inspection-discription__text");
const crossSvg = document.querySelectorAll(".inspection-svg__cross");
const minusSvg = document.querySelectorAll(".inspection-svg__minus");

inspectionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const textElement = inspectionTexts[index];
    const cross = crossSvg[index];
    const minus = minusSvg[index];

    const isExpanded = textElement.classList.contains("expanded");

    if (isExpanded) {
      textElement.classList.remove("expanded");
      cross.style.display = 'block';
      minus.style.display = 'none'

    } else {
      textElement.classList.add("expanded");
      cross.style.display = 'none';
      minus.style.display = 'block'
    }
  });
});
