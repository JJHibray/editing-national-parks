const buildMonumentsHtml = monObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const monumentArticle = buildElement("article", `national-monument--${monObject.id}`);
  monumentArticle.appendChild(buildElement("h3", undefined, monObject.name));
  monumentArticle.appendChild(buildElement("p", undefined, monObject.state));
  monumentArticle.appendChild(buildElement("p", undefined, monObject.area));
  monumentArticle.appendChild(buildElement("p", undefined, monObject.dateEstablished));
  monumentArticle.appendChild(buildElement("p", undefined, monObject.visited));


  if (monObject.visited !== true) {
    let visitedMonumentButton = buildElement("button", undefined, "Visited Monument")
    monumentArticle.appendChild(visitedMonumentButton);
    visitedMonumentButton.addEventListener("click", handleVisitedP)
  }

  let editMonumentButton = buildElement("button", undefined, "Edit Monument")
  monumentArticle.appendChild(editMonumentButton);
  editMonumentButton.addEventListener("click", handleEditP)

  let deleteMonumentButton = buildElement("button", undefined, "Delete Monument")
  monumentArticle.appendChild(deleteMonumentButton);
  deleteMonumentButton.addEventListener("click", handleDeleteP)
  return monumentArticle;
};

const monumentEditForm = (monObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-name--${monObject.id}`, undefined, monObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-state--${monObject.id}`, undefined, monObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Area: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-area--${monObject.id}`, undefined, monObject.area))

  editFormFragment.appendChild(buildElement("label", undefined, "Date Established: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-dateEstablished--${monObject.id}`, undefined, monObject.dateEstablished))

  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))
  let monVisitedT = buildElement("input", `edit-monument-visited--${monObject.id}`, undefined, monObject.visited)
  monVisitedT.type = "radio"
  monVisitedT.name = "visitedP"
  monVisitedT.value = true;
  editFormFragment.appendChild(monVisitedT)
  editFormFragment.appendChild(buildElement("label", undefined, "Not Visited: "))
  let monVisitedFalse = buildElement("input", `edit-monument-notVisited--${monObject.id}`, undefined, monObject.visited)
  monVisitedFalse.type = "radio"
  monVisitedFalse.name = "visitedP"
  monVisitedFalse.value = false;
  editFormFragment.appendChild(monVisitedFalse)


  const updateMonumentButton = buildElement("button", undefined, "Update")
  updateMonumentButton.addEventListener("click", handleUpdateP)
  editFormFragment.appendChild(updateMonumentButton)

  return editFormFragment
}