// let num = prompt("enter a number");
// if( num % 5 === 0){
//     console.log(num,"number is multipal of 5")

// }else{
//      console.log(num,"number is not multipal of 5")
// }

let score = 15 ;
let grade;

if(score >= 90 && score <= 100){
    grade ="A"
}else if(score >= 70 && score <= 89){
    grade = "B"

}else if(score >= 50 &&  score <= 69){
    grade ="C"
}else if ( score >= 30 && score <= 59){
    grade = "D"
}else if ( score >= 0 && score <= 29){
    grade = "F"
}
console.log(grade," is your grade")

