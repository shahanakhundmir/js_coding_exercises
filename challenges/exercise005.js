const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const index = nums.indexOf(n);
  if (index === -1 || index === nums.length -1){
    return null
  }
  else{
    return nums[index+1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const strArr = str.split('');
  const zeros = strArr.filter( n=> n === '0');
  const ones = strArr.filter( n=> n === '1');

  result = {
  0 : zeros.length,
  1 : ones.length
   };
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  sn = n.toString().split('')
  let reversed = '';
  if (sn.length === 1 ){
    return n;
  }
  else {
    for (let i = sn.length-1; i >=0; i--){
      reversed += sn[i];
    }
  return parseInt(reversed);
  }
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let total = 0;
  for (arr of arrs){
      const subtotal = arr.reduce((a, b) => a + b, 0);
      total += subtotal;
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let x = [];
  if (arr.length < 2){
    return arr;
  }
  else if (arr.length === 2){
    const y = [];
    y.push(arr[1], arr[0]);
    return y;
  }
  else{
    const first = arr.shift();
    const last = arr.pop();
    arr. push(first);
    arr.unshift(last);
    }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const values = Object.values(haystack);
  
  for (value of values){
    if ( typeof(value) === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // create an empty dict
  let uniqueWords = {};
  // remove punctuation, change to lower case and split into array elements
  strArr = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(' ');

  // create an array of unique elements
  let unique = new Set(strArr);

  // count the number of each unique element in the strArray, and add word and value to dict.
  for (word of unique){
    let len = strArr.filter(function(value){
      return value === word; 
    }).length     
    uniqueWords[word] = len;
  }
  return uniqueWords;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
