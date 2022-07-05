


// let a=require("readline-sync");
// let num=a.question("Enter the number: ")
// str=""
// for (i=1; i<=5; i++){
//     for (j=1; j<=num; j++){
//         str+="*";
//     }
//     str+="\n";
// }
// console.log(str)


// let n=5;
// let string="";
// for(let i=0; i<n; i++) { 
//   for(let j=0; j<n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


let n=5;
let str="";
i=0;
while (i<n){
    j=0
    while (j<n){
        str+="*";
        j++
    }
    i++
    str+="\n";
}
console.log(str)
