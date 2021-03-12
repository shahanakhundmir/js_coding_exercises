/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 0) throw new Error("n must be above zero");
  const nArr = n.toString().split('');
  let newNum =  nArr.reduce(function( total, num) {
    return total + parseInt(num);}, 0);
    return newNum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  let s = 1;
  if (step !== undefined){
    s = step;
  }
  let result = [];
  let pos = start;

  if (pos <= end){
    //console.log('ascend')
    while ( pos <= end ){
      result.push(pos);
      pos += s;
    }
  }
  else{
    while ( pos >= end ){
      result.push(pos);
      pos -= s;
    }
  }
  return result;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let userName = [];
  for (user of users){
    let arrScreenTime = user.screenTime;
    let media = arrScreenTime.find(x => x.date === date);
    if (media !== undefined){
      let totalUsage = Object.values(media.usage).reduce((total, val) => {
      return total + val }, 0);

      if (totalUsage>100){
        userName.push(user.username);
      };
    }
  };
  return userName;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
    if (hexStr === undefined) throw new Error("hexStr is required");

    if (hexStr.length === 4){
      
      const r = hexStr.slice(1,2);
      const g = hexStr.slice(2,3);
      const b =  hexStr.slice(3);

      hexStr = `#${r}${r}${g}${g}${b}${b}`
    }
    const hex_red = hexStr.slice(1,3);
    const hex_green = hexStr.slice(3,5);
    const hex_blue = hexStr.slice(5);

    rgb_red = parseInt(hex_red, 16);
    rgb_green = parseInt(hex_green , 16);
    rgb_blue = parseInt(hex_blue, 16);

    if(isNaN(rgb_red) || isNaN(rgb_green) || isNaN(rgb_blue)){
      return '';
    }
    const rgbString = `rgb(${rgb_red},${rgb_green},${rgb_blue})`;
  return rgbString
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */ 
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  for (row = 0; row <3; row++){
    if ( board[row][0] ===  "X" && board[row][1] === "X" && board[row][2] === "X" || board[row][0] === "0" && board[row][1] === "0" && board[row][2] === "0"){
      return board[row][0];
    }
  }
  for (col = 0; col <3; col++){
    if ( board[0][col] === "X" &&  board[1][col] === "X" && board[2][col] === "X" || board[0][col] === "0" && board[1][col] === "0" && board[2][col] === "0"){
      return board[0][col];
    }
  }
  if ( board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" || board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"){
    return "X";
  }
  else if (board[0][0] === "0" && board[1][1] === "0" && board[2][2] === "0" || board[0][2] === "0" && board[1][1] === "0" && board[2][0] === "0"){
    return "0";
  } 
  return null;
};


module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
