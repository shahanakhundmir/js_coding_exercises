function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if (people % 40 === 0){
    return people / 40;
  }
  else{
    return Math.floor( people / 40) + 1 ;
  }
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  const sheep = arr.filter( n=> n === 'sheep');
  return sheep.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.address.postCode.slice(0,1) === 'M' && person.address.city === 'Manchester';

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
