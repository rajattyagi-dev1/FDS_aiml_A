function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register here");
      resolve(); 
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch here");
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data");
      resolve();
    }, 4000);
  });
}


register()
  .then(login())
  .then(getData())
  .then(displayData())
  .catch((error) => {
    console.error("An error occurred", error);
  });