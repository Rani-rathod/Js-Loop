

// let n=5;
// let g="";
// for (i=0; i<n; i++){
//   for (j=0; j<i; j++){
//     g+=" ";
//   }
//   for (k=0; k<2*(n-i)-1; k++){
//     g+="*";
//   }
//   g+="\n";
// }
// console.log(g);



// let n=5;
// let g="";
// i=0
// while (i<n){
//   j=0
//   while (j<i){
//     g+=" "
//     j++
//   }
//   k=0
//   while (k<2*(n-i)-1){
//     g+="*";
//     k++
//   }
//   i++
//   g+="\n";
// }
// console.log(g)




let a=require("readline-sync");
let num=a.question("Enter the number:-");
let g="";
i=0
while (i<num){
  j=0
  while (j<i){
    g+=" "
    j++
  }
  k=0
  while (k<2*(num-i)-1){
    g+="*";
    k++
  }
  i++
  g+="\n";
}
console.log(g)
