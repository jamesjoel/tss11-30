let data = [4, 12, 3, 9, 6, 7, 10, 15];


// data.forEach((item, index, arr)=>{
//    console.log(item, index, arr)
// });

// let data2 =  data.map((item, index, arr)=>{
//     return item*2;
// })
// console.log(data2);

// let data2 = data.filter(item=> item != 5);
// console.log(data2);


let ans = data.reduce((acu, item)=>{
    if(acu > item){
        return acu;
    }else{
        return item;
    }    

});

console.log(ans)
