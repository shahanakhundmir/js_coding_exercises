function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squares =[]
  for (let num of nums){
    squares.push(num*num);
  }
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let cCWord = '';
  for (let i = 0; i<words.length; i++){
    if (i === 0){
      cCWord += words[i];
    }
    else{
      let upperCase = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
      cCWord += upperCase;
    }
  }
  return cCWord
  
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
 
  let total = 0 
  for ( let person of people){
    total += person.subjects.length ;
  }
  return total
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for(let menuItem of menu){
    if (menuItem.ingredients.includes(ingredient)){
      return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let result = []
  for(let val of arr1){
    if (arr2.includes(val) && result.includes(val) === false){
      result.push(val);
    }
  }
  return result.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
