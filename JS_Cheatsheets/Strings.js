const str = "I am coding and coding";

// slice(): slice from...to...
console.log(str.slice(2, 6));
console.log(str.slice(-2));

// replace(): replace ... to ...
console.log(str.replace("coding", "learning"));
console.log(str.replace(/CODING/i, "learning")); // case sensitive
console.log(str.replace(/coding/g, "learning")); // replace all matches

// convert to upper and lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// concat(): connect two or more strings
console.log(str.concat(" HAHAHAHA"));

// trim(): moves white splace from start and end
console.log(str.trim());

// charAt(): return char at a index
// charCodeAt(): return unicode instead
console.log(str.charAt(3));
console.log(str.charCodeAt(3));

// split(): convert to array
console.log(str.split(" "));

// indexOf(): return first occurence index of a char
// lastIndexOf(): return first occurence index counting backwards
console.log(str.indexOf("coding"));
console.log(str.lastIndexOf("coding"));

// search(): search for a value and return the first occurence position
console.log(str.search("coding"));

