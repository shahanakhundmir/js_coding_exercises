const {sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
    } = require("../challenges/exercise007");
  
   // console.log(sumMultiples)
   describe('sumDigits', () =>{

      test('check a range of numbers ', () => {
          expect(sumDigits(3457)).toBe(19);
          expect(sumDigits(7295)).toBe(23); 
          expect(sumDigits(2917)).toBe(19);
      });
      
      test('check if teh number contain zeros ', () => {
          expect(sumDigits(2406)).toBe(12);
          expect(sumDigits(1507)).toBe(13);
          expect(sumDigits(0)).toBe(0);
      });

    });

    describe('createRange', () =>{

        test('range with no step', () => {
            expect(createRange(1,8)).toEqual([1,2,3,4,5,6,7,8]);
            expect(createRange(12,13)).toEqual([12, 13]);
        });

        test('range with step, ascending and descending', () => {
            expect(createRange(4, 13, 3)).toEqual([4, 7, 10, 13]); 
            expect(createRange(20, 30, 2)).toEqual([20, 22, 24, 26, 28, 30]);
        });
        
        test('if start is greater than stop, reverse ', () => {
            
            expect(createRange(8,5)).toEqual([8,7,6,5]);
            expect(createRange(7,2)).toEqual([7,6,5,4,3,2]);
        });

        test('if step goes passed the stop', () => {
           expect(createRange(5,8,2)).toEqual([5, 7]);
           expect(createRange(1,6,3)).toEqual([1 ,4]);
           expect(createRange(7,2,3)).toEqual([7, 4]);
        });

      });


      describe('getScreentimeAlertList', () =>{

        const users = [
              {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 30, instagram: 30, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
                            ]
               },
               {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
                            ]
               },
               {
                username: "jim_j_1989",
                name: "jim Jones",
                screenTime: [
                             { date: "2019-05-01", usage: { mapMyRun: 50, whatsApp: 0, facebook: 0, safari: 50} },
                             { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 20, facebook: 40, safari: 50} },
                             { date: "2019-05-14", usage: { mapMyRun: 12, whatsApp: 20, facebook: 0, safari: 31} }
                            ]
               },
               {
                username: "sally_j_1989",
                name: "Sally Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 12, whatsApp: 0, facebook: 100, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 34, facebook: 0, safari: 16} },
                             { date: "2019-05-14", usage: { mapMyRun: 0, whatsApp: 40, facebook: 0, safari: 31} }
                            ]
               }
             ];

        test('basic test, single and multiple users with uage > 100', () => {
            expect(getScreentimeAlertList(users,"2019-06-11")).toEqual(['sally_j_1989']);
            expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(['beth_1234', 'jim_j_1989',]);
        });

        test('usage time is 100 minutes, should not be included', () => {
            expect(getScreentimeAlertList(users,"2019-05-01")).toEqual([]);
        });

        test('date with no usage above 100', () => {
            expect(getScreentimeAlertList(users,"2019-06-14")).toEqual([]);
        });

      });


      describe('hexToRGB', () =>{

        test('basic hexcodes ', () => {
            expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
            expect(hexToRGB('#CCAAEE')).toBe('rgb(204,170,238)');
            expect(hexToRGB('#24E091')).toBe('rgb(36,224,145)');
            expect(hexToRGB('#254620')).toBe('rgb(37,70,32)');
        });


        test('not case sensitive', () => {
            expect(hexToRGB('#abcabc')).toBe('rgb(171,202,188)'); 
            expect(hexToRGB('#ABCABC')).toBe('rgb(171,202,188)');
        });

        test('not valid hexcode', () => {
                expect(hexToRGB('#GGGGGG')).toBe(''); 
                expect(hexToRGB('#KKKKKK')).toBe('');
           });
        
        test('shorthand notation', () => {
               expect(hexToRGB('#abc')).toBe('rgb(170,187,204)'); 
               expect(hexToRGB('#aabbcc')).toBe('rgb(170,187,204)');
        });
        
      });



      describe('findWinner', () =>{

        const boardOne = [
            ["X", "X", "X"],
            ["0", null, "0"],
            ["0", null, "0"]];

        const boardTwo = [
            ["X", "0", null],
            ["X", '0', "0"],
            ["X", null, null]];
        
        const boardThree = [
            ["0", "0", "0"],
            ["X", null, "X"],
            ["X", null, "0"]];
        
        const boardFour = [
            ["0", "X", null],
            ["0", "X", null],
            ["0", null, "X"]];

        const boardFive = [
            ["X", "0", "0"],
            ["X", "0", null],
            ["0", null, "X"]];

        const boardSix = [
            ["X", "0", "0"],
            [null, "X", null],
            ["0", null, "X"]];

        const boardSeven = [
            ["X", "0", "0"],
            ["X", null, null],
            ["0", null, "X"]];
    
        const boardEight = [
            ["X", "0", "0"],
            [null, null, null],
            ["0", "X", "X"]];
        

    
        test('winner X, test column and row', () => {
            expect(findWinner(boardOne)).toBe('X');
            expect(findWinner(boardTwo)).toBe('X');
        });

        test('winner 0, test column and row', () => {
            expect(findWinner(boardThree)).toBe('0');
            expect(findWinner(boardFour)).toBe('0');
        });
      
        test('test diags', () => {
            expect(findWinner(boardFive)).toBe("0");
            expect(findWinner(boardSix)).toBe("X");
        });

        test('no winner', () => {
            expect(findWinner(boardSeven)).toBe(null);
            expect(findWinner(boardEight)).toBe(null);
        }); 
    
      });







      
  
  
  
  
  
  