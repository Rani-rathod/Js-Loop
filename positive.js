

// var n=require("readline-sync");
// i=1
// while (i){
//     var number=n.question("enter number: ");
//     if (number>0){
//         console.log(number,"is positive number");
//     }
//     else if (number==0){
//         console.log(0);
//     }
//     else if (number<0){
//         console.log(number,"is negetive number");
//     }
//     i++
// }



// var n=require("readline-sync");
// for (i=1; i; i++){
//     var number=n.question("Enter the number :");
//     if (number>0){
//         console.log(number,"is positive");
//     }
//     else if (number==0){
//         console.log(0);
//     }
//     else if (number<0){
//         console.log(number,"is negetive  number");
//     }
// }



var n=require("readline-sync");
i=0;
do{
    i++
    number=n.question("Enter the number:-");
    if (number>0){
        console.log(number,"is positive")
    }
    else if (number==0){
        console.log(0);
    }
    else if (number<0){
        console.log(number,"is negetive");
    }
}while (i);
