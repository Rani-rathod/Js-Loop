


// for (let i=65; i<=90; i++){
//     console.log(String.fromCharCode(i))
// }



// let n=5;
// let string="";
// for (let i=1; i<=n; i++){
//   for (let j=0; j<i; j++){
//     string+=String.fromCharCode(j+65);
//   }
//   string+="\n";
// }
// console.log(string);



let n=5;
let str="";
i=1
while (i<=n){
  j=0
  while (j<i){
    str+=String.fromCharCode(j+65)
    j++
  }
  str+="\n";
  i++
}
console.log(str)