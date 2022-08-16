function palindromePermutation_1(str){
    const arr = str.toLowerCase().split("");
    const obj = {};
    let numOfChars = "";
    let objectValues = [];

    // If every char is the same, return true
    if(arr.every(s => s === arr[0])){
        return true;
    }

    // Count chars and store the result in an object
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== " "){
            if(arr[i] in obj){
                obj[arr[i]] += 1;
            }else{
                obj[arr[i]] = 1;
            }
        }
    }

    // Count the true length of the string, which means without any empty spaces
    numOfChars = (Object.values(obj)).reduce((a,b) => {return a+b});

    // Get the object's values in an array
    objectValues = Object.values(obj);

    // If there are even numbers of chars, there is never 1 times 1
    if(numOfChars % 2 === 0){
        if(Object.values(obj).includes(1)){
            return false;
        }
        return true;
    }
    // If there are odd numbers of chars, there is always one 1
    else{
        if((objectValues.filter(el => el === 1)).length > 1){
            return false;
        }
        if(Object.values(obj).includes(1)){
            return true;
        }
        return false;
    }

}

console.log(palindromePermutation_1('Tact Coa')); // true
console.log(palindromePermutation_1('Tact Coab')); // false
console.log(palindromePermutation_1('abba')); // true
console.log(palindromePermutation_1('civic')); // true
console.log(palindromePermutation_1('ivicc')); // true
console.log(palindromePermutation_1('civil')); // false
console.log(palindromePermutation_1('aaaaa')); // true
