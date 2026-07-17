const a=[1,2,3,4,5,6,7,8,9];
const b=a.filter((i)=>{return i%2==0});
console.log("Even=",b);

const c=b.map((i)=>{ return i*i});
console.log("squares",c);

const d=c.reduce((i,s)=>s+i);
console.log("sum of square",d)