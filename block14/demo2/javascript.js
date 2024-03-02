const car = {
    brand : "toyota",
    model : "corolla",
    age : "2016",
    color : "gray"

};
console.table(car);
car["color"] = ["black"];
console.table(car)
delete car["age"];
console.table(car);
car["rand"].unschift();

console.table(car);