let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
};
console.log(car.year);

let person = {
    name: 'Khoa',
    adress: {
        street: 'Ho Dac Di',
        city: 'Hanoi',
        country: 'Vietnam',
    },
}
console.log(person.adress.street);

let student = {
    name: 'Khoa',
    grades: {
        math: 90,
        english: 85,
    }
}

let settings = {
    volume: 50,
    brightness: 70,
}
console.log(settings.volume);
settings.volume = 10;
console.log(settings.volume);

let bike = {
    brand: "Giant",
}
console.log(bike);
bike.color = "red";
console.log(bike);

let employee = {
    name: "John",
    age: 30,
}
console.log(employee);
delete employee.age;
console.log(employee);

const school = {
    classA:["An", "Bình", "Châu"],
    classB:["Đào", "Hương", "Giang"],
}
console.log(school);

