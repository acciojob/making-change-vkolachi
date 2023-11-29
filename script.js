const makeChange = (c) => {
  let units = {
    q:25,
    d:10,
    n:5,  
    p:1
}    
let ans={};
for(let i in units){
  let currentunits=units[i];
  ans[i]=parseInt(c/currentunits);
  c=c%currentunits;
} 
	return ans; 
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
