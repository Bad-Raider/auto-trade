const inspectionBtns = document.querySelectorAll(".inspection-btn");
const inspectionTexts = document.querySelectorAll(".inspection-text");

inspectionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const textElement = inspectionTexts[index];
    const isExpanded = textElement.classList.contains("expanded");

    if (isExpanded) {
      textElement.classList.remove("expanded");
    } else {
      textElement.classList.add("expanded");
    }
  });
});
