function register (cb){
    setTimeout(()=>{
        console.log("register here")
    },1000)
    cb();
    
}
function login (cb){
    setTimeout(()=>{
        console.log("login here")
    },2000)
    cb();
}
function getData(cb){
    setTimeout(()=>{
        console.log("fetch here")
    },3000)
    cb();
}
function displayData (){
    setTimeout(()=>{
        console.log("display data");
    },4000)
   
}

// function waitForInput(delay){
//     const ct=Date.now();
//     const ms=ct+delay;

//     while (Date.now() < ms) {
       
//     }


// }


register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        })
    })
})

// register();
// login();
// getData();
// displayData();


