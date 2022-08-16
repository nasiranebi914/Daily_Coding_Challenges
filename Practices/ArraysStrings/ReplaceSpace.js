/**
 * 1. Use existing data structures
 * Use trim() to delete empty spaces from start and end; then replace() all spaces
 */
function replaceSpace_1(str){
    const newStr = str.trim();
    return newStr.replace(/ /g, "%20");
}
