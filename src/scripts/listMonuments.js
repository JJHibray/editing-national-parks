const listNationalMonuments = () => {
  getAllMonuments().then(monArray => {
    console.log("monumentsArray", monArray)
    let nationalMonumentsFragment = document.createDocumentFragment();

    monArray.forEach(monument => {
      let monHtml = buildMonumentsHtml(monument);
      nationalMonumentsFragment.appendChild(monHtml);
    });

    const nationalMonumentsSection = document.querySelector("#national--monuments");
    clearElement(nationalMonumentsSection)
    nationalMonumentsSection.appendChild(nationalMonumentsFragment)
  });
};