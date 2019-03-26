const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})

const patchPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const getPark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`).then(response => response.json())

const putPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

//Monuments fetch

const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`).then(response => response.json())

const deleteMonuments = () => fetch(`${apiBaseUrl}/monuments/${monId}`, {
  method: "DELETE"
})

const patchMonuments = (monId, updatedMonObject) => fetch(`${apiBaseUrl}/monuments/${monId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonObject)
})

const getMonument = (monId) => fetch(`${apiBaseUrl}/monuments/${monId}`).then(response => response.json())

const putMonument = (monId, updatedMonObject) => fetch(`${apiBaseUrl}/monuments/${monId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonObject)
})