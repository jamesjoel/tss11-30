let user = {
    name : "rohit",
    age : 25,
    city : "indore"
}

let temp = {...user};




user.name = "gaurav";
user.age = 30;
user.city = "mumbai";

console.log(user)
console.log(temp)