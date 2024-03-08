const names = ["Mike", "Leyla","Shayan","Aryan"];
const jsonString = JSON.stringify(names);
const person = {
    "name": "Mike",
    "age": 60,
    "sex": "male",
    "hobbies":  ["computing","TV","cooking"]
}
const jsonString2 = JSON.stringify(person);
console.log(jsonString2);
console.log(jsonString);

