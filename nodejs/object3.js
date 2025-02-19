let user = { 
    name : "rohit",
    age : 25,
    city : "indore"
}

// let info = user; // binding will conti
let info = {...user, name : "amar", age : 24, city : "mumbai"}; // binding breaked
console.log(info)