// While loop

// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=1
// var count=0;
// while (i<=num){
//        if (num%i==0){
//              count+=1
//        }
//        i+=1
// }
// if (count===2) {
//        console.log("prime number")
// }
// else {
//    console.log("not prime number")
// }


// For loop

// var n=require("readline-sync");
// let num=n.question("enter number: ");
// count=0
// for (i=0; i<=num; i++){
//     if(num%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("prime");
// }
// else{
//     console.log("no prime")
// }



// Do loop

var n=require("readline-sync");
const num=n.question("enter number: ");
let i=1
var count=0;
do{
    if (num%i==0){
        count+=1
    }
    i+=1
if (count===2) {
       console.log("prime number")
}
else {
       console.log("not prime number")
}
}
while (i<=num);



