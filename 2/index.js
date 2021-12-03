//#region task1

// //a
// let arr =[1, 2,3];
// for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
    
// }

// //b
//     let arr =[1, 2, 3,100];
//     console.log(Math.max.apply(null, arr));

// //c
//     let arr =[1, 2, 3,100];
//     arr.push(15);
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }

// //d
//     let arr =[1, 2, 3, 100];
//     arr.pop();
//     for (let i = 0; i < arr.length; i++) {
//          console.log(arr[i]);
//     }

// //e
//     let arr =[1, 100, 5, 20];
//     arr.sort((a,b)=>a-b);
//     console.log("Last element of sorted array: "+arr[arr.length-1])

//f
    // let arr =[1, 100, 5, 20];
    // console.log(arr);
    // arr.splice(3,0,43);
    // console.log(arr);

//g
    // let arr =[1, 100, 5, 20,30,2,45];
    // console.log(arr);
    // console.log(arr.slice(3));

// //h
// let arr =[1, 100, 5, 20];
// arr.forEach(function(number){
//     console.log(number)
// });

// //i
// let arr =[1, 50, 100, 5, 20];
// arr.forEach(function(number){
//     if(number>40){
//          console.log(number)
//     }
// });
//#endregion

//#region task2
//  function getSequence (a ,b){
//      let arr=[];
// for (let i = a; i <= b; i++) {
//     arr.push(i);   
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// }

// getSequence(1,5);

//#endregion

//#region task3
// function checkFactors(array, number){
// for (let i = 0; i < array.length; i++) {
//     if (number%array[i]!=0) {
//         return false;
//     }
// }
// return true;
// }
// let arr = [ 2,3,6,11]; //false
// console.log(checkFactors(arr,12));
//#endregion

//#region task4
// function check(array, number){
// for (let i = 0; i < array.length; i++) {
//     if (number==array[i]) {
//         return true;
//     }
// }
// return false;
// }
// let arr = [2,3,6,11]; //false
// console.log(check(arr,12));
//#endregion

//#region task5
// let arr1 = [1,2,3];
// let arr2 = [6,2];
// let arrCon=arr1.concat(arr2);
// console.log("Concatated array: "+arrCon);
//#endregion

//#region task6
// function monthName(number){
//     switch(number){
//         case 1:
//         return "January";
//         break;
//         case 2:
//         return "February";
//         break;
//         case 3:
//         return "March";
//         break;
//         case 4:
//         return "April";
//         break;
//         case 5:
//         return "May";
//         break;
//         case 6:
//         return "June";
//         break;
//         case 7:
//         return "July";
//         break;
//         case 8:
//         return "August";
//         break;
//         case 9:
//         return "September";
//         break;
//         case 10:
//         return "October";
//         break;
//         case 11:
//         return "November";
//         break;
//         case 12:
//         return "December";
//         break;
//     }

// }

// let input= prompt("Please, enter the season number");
// console.log("Correspoding month's name is "+monthName(parseInt(input)));
//#endregion
