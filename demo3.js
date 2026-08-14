function sum(...num){
    const sum=num.reduce((i,s)=>s+i)
    // let sum=0;
    // for(let i of num){
    //     sum+=i
    // }
    return sum
}

console.log("Sum",sum(1,2,3,4,5));

