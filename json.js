//Valid data types: string, boolean, array, null, number, JSON object
//In JS these also include: function, date, undefined

//JSON objects 
//object literal contain key/value pair,
//surrounded by {}, 
//key : value, 
//key must be string and value of valid data type

//two ways to create:

//direct
var obj = {name : "Shalini", age : 19, number : "xxxxx03335"};

//by parsing string
var string = '{"name" : "Sahil", "age" : 16, "number" : "xxxxx74750"}';
var obj2 = JSON.parse(string);

//accessing object values
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.number);

let looping = "";
//gives keys
for (const x in obj2) {
  looping += x + ", ";
}
console.log(looping);

let looping1 = ""
//gives values
for (const x in obj2) {
    looping1 += obj2[x] + ", ";
}
console.log(looping1);


//JSON arrays
//surrounded by []
//data must be of valid data type
var arr = ["Shalini", 19, "Indore"]

//accessing array value
console.log(arr[0] + " " + arr[1] + " " + arr[2]);

var exam = {
    "name":"John",
    "age":30,
    "cars":["Ford", "BMW", "Fiat"]
}
console.log(exam.cars[0]);


//JSON.parse() -> converts JSON string into js object
//parsing
var obj4 = JSON.parse('{"firstName":"John", "lastName":"Doe" }');
console.log(obj4);
console.log(obj4.firstName);

//parsing a array
var obj3 = JSON.parse('["Shalini", "Aastha", "Shreya"]');
console.log(obj3);
console.log(obj3[0]);

//converting string into date
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj5 = JSON.parse(text);
obj5.birth = new Date(obj5.birth);
console.log(obj5.birth);

//re-enabling function
var text2 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
var obj6 = JSON.parse(text2);
obj6.age = eval("(" + obj6.age + ")");
console.log(obj6.age);


//JSON.stringify() -> converts object to JSON string


//fetching external json in local device
fetch('./example.json')
    .then((response) => response.json())
    .then((json) => console.log(json.members[0])); // arrow ke bad jo bhi kuch krna h yaha likhna h
