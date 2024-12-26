for(let a = 1; a <= 500; a++){
    // if(a % 5 == 0 && a % 13 == 0){
    //     console.log(a)
    // }

    if(a % 13 == 0){
        let  b = a * 5;
        if(b > 500){
            break;
        }
        console.log(b);
    }

}