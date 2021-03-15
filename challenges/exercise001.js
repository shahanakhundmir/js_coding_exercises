function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

    let newWord = word.slice(0,1).toUpperCase() + word.slice(1);
    return newWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
    
  let initial = firstName.slice(0,1).toUpperCase() + '.' + lastName.slice(0,1).toUpperCase();
  return initial;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

   let total = originalPrice + ((originalPrice / 100) * vatRate);
   return Math.floor(total * 100) / 100 ;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let salePrice = originalPrice - ((originalPrice / 100) * reduction);
  return  Math.floor(salePrice * 100) / 100 ;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  if (str.length % 2 === 0){
    let indx = (str.length / 2);
    return str.slice(indx-1,indx+1);
  }
  else{
    let indx = (str.length / 2) - 0.5;
    return str.slice(indx,indx+1);
  }
    
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

    let reversed ='';
    for (let i = word.length -1; i>=0; i--){
      reversed += word[i];
  }
  return reversed;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let reversedWords =[]
  for (let word of words){
    let reversed ='';
    for (let i = word.length -1; i>=0; i--){
      reversed += word[i];
    }
    reversedWords.push(reversed);
  }
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  let total = 0;
  for (let user of users){
    if(user.type === 'Linux'){
      total += 1;
    }
  }
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
 
  const total = scores.reduce((a, b) => a + b, 0)
  let mean =  total / scores.length;
  return Math.round(mean * 100) / 100 ;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }
  else  if (n % 3 === 0) {
    return 'fizz';
  }
  else if (n % 5 === 0) {
    return 'buzz';
  }
  else{
    return n
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
