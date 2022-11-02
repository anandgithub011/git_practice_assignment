//Check Prime or Not

let factor=0;
let number=13;

for(let i=1; i<=number; i++){


  if(number % i == 1){

   factor++;
  }

}
if(factor==2){
   console.log("Number is","Prime");
}else {
   console.log("Number is","Not Prime");
}