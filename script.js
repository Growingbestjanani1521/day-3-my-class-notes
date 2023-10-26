//Introduction to Array
// var a =[1,2.5,"abc",true]
// console.log(a);
// for(var i=0;i<a.length;i=i+1){
//     console.log(a[i]);
// }
// console.log(a.length);
// console.log(a.length-1);
// console.log(a.indexOf(2.5));
// a[100]=50;
// console.log(a.length);
// console.log(a[99])

//Introduction to Objects:- 
// var/let/const objName = {
//     KeyName: Value
// }

//person details (name,age,gender,year,city)
// var personDetails = {
//    Name:"Janani" ,
//    Age: 33,
//    Gender: "Female",
//    Year: 1990,
//    City: "Vellore"
// }

// console.log(personDetails);
// using dot method
// console.log(personDetails.Age);
// console.log(personDetails.gender);
// console.log(personDetails.Name);

// console.log(personDetails);
// using box method
// console.log(personDetails.[Age]);
// console.log(personDetails.[gender]);
// console.log(personDetails.[Name]);

// for loop using object method example
//for in loop
//syntax:-
//for(var key in objectname)
//{
    //block of codes
//}
// =>Adding a new element in the object:-
//syntax:- objectName.KeyName=value

// personDetails.Emailid = "jananimani1590@gmail.com" //add
// personDetails.phone=7904406649 //add

//=>Updating a existing element in the object:-
//syntax:-objectName.KeyName=value

// personDetails.Age=33 //update

// =>Deleting the element in the object:-
// syntax:- delete objectName.keyname

// delete personDetails.Year //delete
//=> can we give array inside the objects? if yes how to print?
// yes using looping

// personDetails.Education=["10","12","degree"]
// console.log(personDetails);
// for(var i=0;i<personDetails.Education.length;i=i+1){
//     console.log(personDetails.Education[i])

// }

//Introduction JSON

// var obj ={
//     "name":"joe",
//     "age":"20",
//     "gender":"male"
// }

//Array of objects

// var arr = [
// {
//     "name":"john",
//     "age":"20"
// },
// {
//     "name":"Doe",
//     "age":"30"
// },
// {
//     "name":"Wick",
//     "age":"40"
// }
// ]

// // for (var i=0;i<arr.length;i++){
// //     console.log(arr[i].name,arr[i].age)
// // }
// arr[3]={"name":"rupan","age":"35"} //add
// arr[2]={"name":"Wick","age":"50"}//update
// console.log(arr)