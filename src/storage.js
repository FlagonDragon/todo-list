//check for storage

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storageFeedback(type) {

  if (storageAvailable(type)) {

  console.log('Yippee! We can use localStorage awesomeness');

  } else {

  alert('Too bad, no localStorage for us');

  };

};

function getStorage() {

  let localProjects = JSON.parse(localStorage.getItem('userProjects'));
  
  myProjects = localProjects;

  // if (myProjects) {

  //   console.log('projects modified');

  // } else {

  //   console.log('no project data, bruv.');
    
  // };

};

function setStorage() {

  localStorage.setItem('userProjects', JSON.stringify(myProjects))

};

export {storageAvailable,storageFeedback, getStorage, setStorage}