let data = [2, 5, 9, 3, 1];

let data2=data.map((item, index, arr)=>{
    return item*index;
})

console.log(data2);
/*
    0
    5
    18
    9
    4
*/