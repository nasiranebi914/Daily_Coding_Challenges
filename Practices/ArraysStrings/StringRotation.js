function stringRotation(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  if (arr1.length != arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(stringRotation("waterbottle", "erbottlewat"));
