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


async function main(){
try{
    await register();
    await login();
    await getData();
    await displayData();     
   }
 catch(err){
    console.log(err);

}}


main();
