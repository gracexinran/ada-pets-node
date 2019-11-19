// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    console.log(setResult(response.data))
  })
  .catch((error) => {
    console.log(setError(error.message));
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
  
  // Fill out as part of Wave 2.
  axios.get(BASE_URL + `${selectedPet}`)
  .then((response) => {
    console.log(setResult(response.data))
  })
  .catch((error) => {
    setError('Failed, and details are:', error.message);
  });
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }
  
  // Fill out as part of Wave 3.
  axios.delete(BASE_URL + `${selectedPet}`)
  .then((response) => {
    console.log(setResult(response.data))
  })
  .catch((error) => {
    console.log(setError('Failed, cannot remove non-existed pet', error.message));
  });
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    console.log(setResult(response.data))
  })
  .catch((error) => {
    console.log(setError('Failed, cannot add pet', error));
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
