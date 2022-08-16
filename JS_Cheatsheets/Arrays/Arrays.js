// create
const fruits = ['apple', 'orange', 'kiwi'];
const numbers = [23, 45, 4, 0, -1, 2546];

// access a value
let apple = fruits[0];

// change a value
fruits[2] = 'melon'; 

// convert to string
const fruitsString_1 = fruits.toString();
const fruitsString_2 = fruits.join(" ");

// push and pop (change the last element)
fruits.pop();
fruits.push('peach');

// shifting (change the first element)
fruits.shift(); // remove
fruits.unshift('banana'); // add

// merging two arrays
const vegetables = ['potato', 'corn', 'salad'];
const myFavs = fruits.concat(vegetables);

// splice
fruits.splice(1,0, 'watermelon', 'cherry'); // 1->position; 0->elems to be removed

// slice
fruits.slice(1, 2);



/**
 * 
 * Methods
 * 
 */


// sort
fruits.sort();
// sort numbers correctly: don't use sort!! because sort() is string wise!!!
numbers.sort(function(a,b) {return a-b});

// reverse
fruits.reverse();
numbers.sort(function(a,b) {return b-a});

// the compare function
function compare (a,b){
    return a-b;
}

// find highest/lowest number
numbers.sort(function(a,b){return a-b});
const highest = numbers[numbers.length-1];
const lower = numbers[0];
    //OR use Math()
    function findMax(arr){
        return Math.max.apply(null, arr);
    }
    function findMin(arr){
        return Math.min.apply(null, arr);
    }
    //OR these functions
    function findMax (arr){
        let l = arr.length;
        let max = -Infinity;
        while(l --){
            if(arr[l] > max){
                max = arr[l];
            }
        }
        return max;
    }
    function findMin (arr){
        let l = arr.length;
        let min = Infinity;
        while(l--){
            if(arr[l] < min){
                min = arr[l];
            }
        }
        return min;
    }

// forEach(): do something for each elem
numbers.forEach((num) => {return num});

// map(): create a new arr by mapping through each elem
const numbers_2 = numbers.map((num) => {return num * 2});

// filter(): filter out matched condition (return values)
const over200 = numbers.filter((num) => {return num > 200});

// reduce(): left to right to one number 
let sum = numbers.reduce((total, num) => {return(total + num)});

//every(): check if all elem pass a test (return true or false)
const everyPass = numbers.every((num) => {return num > 200});

// some(): check if some elem pass a test (return true or false)
const somePass = numbers.some((num) => {return num > 200});

// indexes
let aPosition = numbers.indexOf(4);
let lastPostion = numbers.lastIndexOf(4); // if there are multiple 4, return the last one

// find(): find an elem and return the first elem that pass 
// findIndex(): same but return its position
let firstGreaterThan20 = numbers.find((num) => {return num > 20});
let positionOfPass = numbers.findIndex((num) => {num > 20});

// entries(): return key value pair of an arr
const entriesFruits = fruits.entries();

// includes(): if an elem exists in an arr, return true or false
const includesNum = numbers.includes(4);
console.log(includesNum)


