function ifOneWay_1 (str1, str2){
    const s1 = str1.split("");
    const s2 = str2.split("");
    let counter = 0;

    if(str1.length > str2.length){
       for(let i = 0; i < str1.length; i++){
            if(!s1.includes(s2[i])){
                counter += 1;
            }
    } 
    }else{
        for(let i = 0; i < str2.length; i++){
            if(!s2.includes(s1[i])){
                counter += 1;
            }
    } 
    }
 
    if(counter == 1){
        return true;
    }
    return false;
}

console.log(ifOneWay_1("pale", "ple"));
console.log(ifOneWay_1("pales", "pale"));
console.log(ifOneWay_1("pale", "bale"));
console.log(ifOneWay_1("pale", "bake"));

