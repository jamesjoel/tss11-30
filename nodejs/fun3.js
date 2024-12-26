function demo(a=50, b=10, c=1){
    let x = a*b; //1000
    let y = x/c; // 100
    let z = y+100; // 200
    
    let data = [x, y, z];
    // let data = {a:x, b:y, c:z};
    
    return data;
    
}






let [a, b] = demo(50, 20, 10);
console.log(a);



