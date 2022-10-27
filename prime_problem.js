//Check Prime or Not

let count=0;
let num=13;

for(let i=1; i<=num; i++){


  if(num%i==1){
   count++;
  }

}
if(count==2){
   console.log("Prime Number");
}else {
   console.log("Not prime");
}