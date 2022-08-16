/**
 * Permutation: Given 2 strings ABC and CBA, CBA is a permutation of ABC; Because CBA has the same
 *              chars as ABC, but just in different order
 */

function permutaion_1(str1, str2){

    if(str1 === str2){
        return true;
    }
    
    const str1Array = str1.toLowerCase().split('');
    const str2Array = str2.toLowerCase().split('');
    if(str1Array.length !== str2Array.length){
        return false;
    }
    str1Array.sort();
    str2Array.sort();

    // for(var i = 0; i < str1Array.length; i++){
    //     for(var j = 0; j < str2Array.length; j++){
    //         if(str1Array[i] === str2Array[j]){
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }
    // }
    if(JSON.stringify(str1Array) === JSON.stringify(str2Array)){
        return true;
    }
    return false;

    
}

function permutaion_2 (str1, str2){
    const obj1 = {};
    const obj2 = {};
    for(var i = 0; i < str1.length; i++){
        if(str1[i] in obj1){
            obj1[str1[i]] += 1;
            
        }else{
            obj1[str1[i]] = 1;
        }
    }
    
    for(var i = 0; i < str2.length; i++){
        if(str2[i] in obj2){
            obj2[str2[i]] += 1;
        }else{
            obj2[str2[i]] = 1;
        }
    }

    for(let o in obj1){
        if(obj1[o] === obj2[o]){
            return true;
        }
        return false;
    }
    
    
}

console.log(permutaion_2('apple', 'elppa'));
