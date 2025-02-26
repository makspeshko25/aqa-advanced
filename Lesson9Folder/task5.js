const student = [{
    firstName: 'Maksym',
    age: 25,
    courses: ["Математика", "Історія", "Програмування"]
},
{
    firstName: 'Maksym',
    lastName: 'Peshko',
    age: 25
},
{
    age: 25,
    courses: ["Математика", "Історія", "Програмування"]
}];

for (const {firstName,lastName,age,courses} of student){
    console.log(firstName,lastName,age,courses)
}
