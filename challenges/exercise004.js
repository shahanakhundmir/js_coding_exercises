function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let ls = [];
  for(num of nums){
    if (num < 1){
      ls.push(num);
    }
  }
  return ls;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  listOfNames =[];
  for (n of names){
    if(n.slice(0,1) === char){
      listOfNames.push(n);
    }
  }
  return listOfNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  newLs = [];
  for(word of words){
    let x = word.split(' ');
    if (x[0] === 'to'){
      newLs.push(word);
    }
  }
  return newLs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  numLs = [];
  for(num of nums){
    if (Number.isInteger(num)){
      numLs.push(num);
    }
  }
  return numLs;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  cityLs = [];
  for (user of users){
    cityLs.push(user.data.city.displayName);
  }
  return cityLs;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

    sqRootLs = [];
    for (num of nums){
      x = Math.sqrt(num);
      sqRootLs.push(Math.round(x * 100) / 100) ;
    }
    return sqRootLs;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
 
  let sentenceLs = [];
  for(sentence of sentences){
    if (sentence.toLowerCase().includes(str.toLowerCase())){
      sentenceLs.push(sentence);
    }
  }
  return sentenceLs;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let maxLs = [];
  for(triangle of triangles){
    const maxVal = triangle.reduce((max, side)=>{
      if(side > max){
        return side;
      }
      return max;
    })
    maxLs.push(maxVal);
  }
  return maxLs;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
