let WhereObj = (obj)=>{
    if(obj.name){
        let a = obj.name; // ROHIT
        a = a.toLowerCase(); // rohit
        let arr = a.split(""); // ["r", "o", "h" ......]
        let b = arr[0].toUpperCase();
        arr.shift(); // remove first ele in array
        let c = b+arr.join("");
        return { name : c};

    }
    else if(obj.department){
        let a = obj.department;
        a = a.toUpperCase();
        return {department:a}
    }
    else{
        return obj;
    }
}

module.exports = WhereObj;