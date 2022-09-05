function stringCompression_1(str){
    let s = "";
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        counter+=1;
        if(str[i] !== str[i+1] || i+1 > str.length){
            s += str[i]+counter;
            counter = 0;
        }
    }

    if(s.length >= str.length){
        return str;
    }else{
        return s;
    }
}

console.log(stringCompression_1('aabbccccaaa'));