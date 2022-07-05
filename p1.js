

// str=""
// for(let i=1; i<=5; i++){
//     for(j=1; j<=i; j++){
//         str+="*";
//     }
//     str+="\n"
// }
// console.log(str)




// var i=0
// var str=""
// while (i<=5){
//     j=0
//     while (j<=i){
//         str+="*";
//         j+=1
//     }
//     i+=1
//     str+="\n"
// }
// console.log(str);




let a=require("readline-sync");
let num=a.question("Enter the number: ");
str=""
for (let i=1; i<=num; i++){
    for (let j=1; j<=i; j++){
        str+="*";
    }
    str+="\n";
}
console.log(str)

