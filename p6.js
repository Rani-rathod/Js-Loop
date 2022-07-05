

// let n=5;
// let s="";
// for (i=1; i<=n; i++){
//   for (j=1; j<=n-i; j++){
//     s+=" ";
//   }
//   for (k=0; k<2*i-1; k++){
//     s+="*";
//   }
//   s+="\n";
// }
// console.log(s);



// let n=5;
// let s="";
// i=0
// while (i<n){
//   j=0
//   while (j<n-i){
//     s+=" ";
//     j+=1
//   }
//   k=0
//   while (k<2*i-1){
//     s+="*"
//     k+=1
//   }
//   i+=1
//   s+="\n"
// }
// console.log(s)


let a=require("readline-sync");
let num=a.question("Enter the number: ");
let s="";
i=0
while (i<num){
  j=0
  while (j<num-i){
    s+=" ";
    j+=1
  }
  k=0
  while (k<2*i-1){
    s+="*"
    k+=1
  }
  i+=1
  s+="\n"
}
console.log(s)
