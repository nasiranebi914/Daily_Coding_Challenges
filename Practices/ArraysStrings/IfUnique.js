/* 1.   count each char and sotre in an obj
*       return false if obj has more than 1 count
*/ 
function ifUnique_1(str){
    let obj = {};
    for(var i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]]+=1;
            return false;
        }
        else{
            obj[str[i]] = 1;
        }
    }
    return true;
}

/**
 * 2. Compare each char with each char in 2 loops
 *
 * Case sensitive!
 */

function ifUnique_2(str){
    for(let i = 0; i < str.length-1; i++){
        for(let j = i+1; j < str.length; j++){
            if(str[i] == str[j]){
                return false;
            }
        }
    }
    return true;
}

/**
 * 3. Compare with 128 ASCII (or 256 extended ASCII) characters
 */

function ifUnique_3(str){
    if(str.length > 128){
        return false;
    }
    let asciiChars = [128];
    // set all 128 chars to false initialy
    for(let i = 0; i < str.length; i++){
        asciiChars[i] = false;
    }

    for(let i = 0; i < str.length; i++){
        let index = str[i].charCodeAt(); // find ASCII of the current char

        // set the current char in ASCII to true; if already is true, means we have set it already, return false
        if(asciiChars[index] == true){
            return false;
        }
        asciiChars[index] = true;
    }
    return true;
}


/**
 * 4. Assume we only have chars from a - z. 
 * case sensitive!!
 */

function ifUnique_4(str){
    let checker = 0;

    for(let i = 0; i < str.length; i++){
        let charAtIndex = str[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if((checker > (1 << charAtIndex)) > 0){
            return false;
        }
        checker = checker | (1 << charAtIndex);
    }
    return true;
}


/**
 * 5. Convert the string to set, if length of set is equal to length of string, return true
 */

function ifUnique_5(str){
    let stringToSet = new Set(str);
    if(stringToSet.size === str.length){
        return true;
    }
    return false;
}

console.log(ifUnique_5('apple'))


