

// let n=5; 
// let string="";
// for (let i=1; i<=n; i++){
//   for (let j=0; j<n-i+1; j++){
//     string+=String.fromCharCode(j+65);
//   }
//   string+="\n";
// }
// console.log(string);



let n=5;
let str="";
i=0
while (i<=n){
    j=0
    while (j<n-i+1){
        str+=String.fromCharCode(j+65)
        j++
    }
    str+="\n";
    i++
}
console.log(str)
