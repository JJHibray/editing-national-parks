const handleDeleteP = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monId = event.target.parentNode.id.split("--")[1];

  deletePark(monId).then(() => listNationalMonuments());
};

const handleVisitedP = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monId = event.target.parentNode.id.split("--")[1];

  let visitedMonumentObject = {
    visited: true
  };

  patchMonuments(monId, visitedMonumentObject).then(() => listNationalMonuments());
};

const handleEditP = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let monId = event.target.parentNode.id.split("--")[1];

  const monumentArticle = document.querySelector(`#national-monument--${monId}`);
  clearElement(monumentArticle);

  getMonument(monId).then(monumentToEdit => {
    const editFormForMonument = monumentEditForm(monumentToEdit);
    monumentArticle.appendChild(editFormForMonument);
  });
};

const handleUpdateP = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monId = event.target.parentNode.id.split("--")[1];

  const editedMonumentsName = document.querySelector(`#edit-monument-name--${monId}`);
  const editedMonumentsState = document.querySelector(`#edit-monument-state--${monId}`);
  const editedMonumentsArea = document.querySelector(`#edit-park-area--${monId}`);
  const editedMonumentsDateEstablished = document.querySelector(`#edit-park-dateEstablished--${monId}`);
  let radioButtonValue = document.querySelector(`input[name="visitedP"]:checked`).value;

  console.log(editedParkName.value, editedParkState.value, editedParkLatitude.value);

  let editedMonument = {
    name: editedMonumentsName.value,
    state: editedMonumentsState.value,
    latitude: editedMonumentsArea.value,
    longitude: editedMonumentsDateEstablished.value,
    visited: (radioButtonValue === "true")
  };

  putMonumnents(monId, editedMonument).then(() => listNationalMonuments());
};