// let a=5;
// let str="";
// for (i=0; i<a; i++) {
//   for (k=0; k<a-i; k++) {
//     str+="*";
//   }
//   str+="\n";
// }
// console.log(str);



// let a=5;
// let str="";
// i=0
// while (i<a){
//     j=0
//     while (j<a-i){
//         str+="*";
//         j+=1
//     }
//     i+=1
//     str+="\n";
// }
// console.log(str)



let a=require("readline-sync");
let num=a.question("Enter the number: ");
i=0;
str=""
while (i<num){
    j=0
    while (j<num-i){
        str+="*";
        j++
    }
    i++
    str+="\n";
}
console.log(str)

