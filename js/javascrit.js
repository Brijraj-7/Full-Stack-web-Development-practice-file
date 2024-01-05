let size = 'l';

if(size === 'xl'){
    console.log(250);
}else if(size === 'l'){
    console.log(200);
}else if (size === 'm'){
    console.log(100);
}else if(size === 's'){
    console.log(50);
}else{
    console.log("popcorn is not avelebal.");
}

// Good String

let str = 'apple';

if ((str[0]==='a')&&(str.length>3)){
    console.log("This is Good String.");
}else{
    console.log("This is Not Good String.");
}

// switch

let num = 3;

switch(num){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturaday");
        break;
        default:
            console.log("This is wrong Day!");
}

// let fristName = prompt("Enter your fristName:");
// let lastName = prompt("Enter your lastName");
// let mag =`Welcome ${fristName+lastName} !`;
// alert(mag);
// console.log(`Welcome ${fristName+lastName} !`);



// JS part2 Assignment

//Q1
let Num = 100;
if(Num%10==0){
    console.log("good");
}else{
    console.log("bed")
}

//Q2
// let Name = prompt("Enter your Name:");
// let age = prompt("Enter your agr:");
// let mag = Name + " is "+ age +" years old"; 
// alert(mag);

//Q3
let quarter = 2 ;
switch(quarter){
    case 1:
        console.log("January,February,March");
    break;
    case 2:
        console.log("April,May,June");
    break;
    case 5:
        console.log("July,August,September");
    break;
    case 4:
        console.log("October,November,December");
    break;
}


//Q4

let Str = "applem";

if((Str[0] === 'A' || Str[0] === 'a') && (Str.length>5)){
    console.log("Golden String");
}else{
    console.log("Not Golden String");
}

// Q5

let a = 5;
let b = 35;
let c = 150;

if(a>b){
    if(a>c){
        console.log(a, " is largest");
    }else{
        console.log(c, " is largest");
    }
}else{
    if(b>c){
        console.log(b, "is largest");
    }else{
        console.log(c, "is largest")
    }
}


// Q6

let num1 = 2977;
let num2 = 2577;

if ((num1%10) ===(num2%10)){
    console.log("numbers have the same last digit which is",num1%10);
}else{
    console.log("numbers don'thave the same last digi")
}


// String

let msg = "Ilovecoding"

    // let password = prompt("Enter your password");
    // let newpass = password.trim();
    // console.log(newpass);



// js part 3 assingment 

// Q1
let arr = [7,9,0,-2];
let n=3;
let ans = arr.slice(0, n);
console.log(ans);


// Q2
let arr2 = [7,9,0,-2];
let n2 = 3;
let ans2 = arr2.slice(arr2.length-n);  
console.log(ans2);


// Q3
// let str1 = prompt("Enter the String");
// if (str1.length == 0){
//     console.log("your string is blank");
// }else{
//     console.log("your String is not blank");
// }

//Q4 
let str2 = "BrijRaJ";
let inx = 3;

if (str2[inx] == str2[inx].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is Not lowercase");
}
 
// Q6
let arr3=["hello",'a',23,64,99,-6]; 
let item='a';
if(arr3.indexOf(item) != -1){
    console.log("element exists in array");
}else{
    console.log("element does not exist in array");
}


// Prirint 5 table

// let z = prompt("Enter your table number");
// let x = parseInt(z);

// for(let i=x; i<=x*10; i=i+x){
//     console.log(i);
// }

// favorite Movie 

// const favMovie = "hulk";

// let guess = prompt("Guess My Favorite Movie");

// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong guess. please try again");
// }

// if(guess === favMovie){
//     console.log("Congrats..");
// }else{
//     console.log("you quit")
// }

//  js part4 Assingmet 

// Q1
let aar = [1,2,3,4,5,6,2,3];
let numarr = 2;

for(let i=0; i<aar.length; i++){
    if (aar[i]==numarr){
        aar.splice(i,1);  
    }
}
console.log(aar);


function printInfo(name){
    console.log(name);
} 
printInfo(prompt("Enter your name"));   
