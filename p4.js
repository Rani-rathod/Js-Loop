
// let n=5;
// let str="";
// for (i=1; i<=n; i++) {
//   for (j=0; j<n-i; j++) {
//     str+=" ";
//   }
//   for (k=0; k<i; k++) {
//     str+="*";
//   }
//   str+="\n";
// }
// console.log(str);



// let n=5;
// let str=""
// i=0
// while (i<=n){
//   j=0
//   while (j<n-i){
//     str+=" ";
//     j+=1
//   }
//   k=0
//   while (k<i){
//     str+="*";
//     k+=1
//   }
//   i+=1
//   str+="\n";
// }
// console.log(str)



let a=require("readline-sync");
let num=a.question("Enter the number: ");
i=0
str=""
while (i<=num){
  j=0
  while (j<num-i){
    str+="";
    j++
  }
  k=0;
  while (k<i){
    str+="*";
    k++
  }
  i++
  str+="\n";
}
console.log(str)