const { sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe('sumMultiples', () => {
    test('test that it returns the sum of all multiples of 3 and 5 ', () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected)
        expect(sumMultiples([3, 2, 9, 12, 7])).toBe(24);
        expect(sumMultiples([3, 9, 12])).toBe(24);
        expect(sumMultiples([5, 25, 15])).toBe(45);
    });
    test('Expect that negative numbers are ignore ', () => {
        expect(sumMultiples([3, -9, 12])).toBe(15);
        expect(sumMultiples([5, 25, -15])).toBe(30);
    });
    test('Expect that no multiples returns 0 ', () => {
        expect(sumMultiples([1, 7, 4, 8])).toBe(0);
    });
});

describe('isValidDNA', () => {
    test('Expect that a sequence with letters other than C G T A is invalid ', () => {
        expect(isValidDNA('CGTACCGATTACG')).toBe(true);
        expect(isValidDNA('ACGWTATRCGA')).toBe(false);
    });
    test('Expect that the sequence is case sensitive ', () => {
        expect(isValidDNA('CgTACCGATTACG')).toBe(false);
        expect(isValidDNA('cccccc')).toBe(false);
    });
});

describe('getComplementaryDNA', () => {
    test('Expect that a valid sequence is given and returns a sequence of its opposite pairs ', () => {
        expect(getComplementaryDNA('CGTACGTACGTACGTA')).toBe('GCATGCATGCATGCAT');
        expect(getComplementaryDNA('CCCTTTAAAGGG')).toBe('GGGAAATTTCCC');
    });
    test('Expect that the sequence is not case sensitive ', () => {
        expect(getComplementaryDNA('ctgactgactga')).toBe('GACTGACTGACT');
        expect(getComplementaryDNA('cccccc')).toBe('GGGGGG');
    });
});

describe('isItPrime', () => {
    test('Divisible by itself and only 1 ', () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(15)).toBe(false);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(100)).toBe(false);
    });
    test('Not negative', () => {
        expect(isItPrime(-11)).toBe(false);
    });
    test('Not 0 or 1 ', () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(0)).toBe(false);
    });
});

describe('createMatrix', () => {
    test('matrix of n, populated by fill ', () => {
        expect(createMatrix(2, 'hello')).toEqual([['hello', 'hello'], ['hello', 'hello']]);
        expect(createMatrix(3, 'jump')).toEqual([['jump', 'jump', 'jump'], ['jump', 'jump', 'jump'], ['jump', 'jump', 'jump']])
        expect(createMatrix(4, 'up')).toEqual([['up', 'up', 'up', 'up'], ['up', 'up', 'up', 'up'], ['up', 'up', 'up', 'up'], ['up', 'up', 'up', 'up']]);
    });
    test('Not negative', () => {
        expect(createMatrix(-11, 'go')).toEqual([]);
    });
    test('0 gives empty array ', () => {
        expect(createMatrix(0, 'go')).toEqual([]);
    });
    test('1 gives array with 1 value ', () => {
        expect(createMatrix(1, 'go')).toEqual([['go']]);
    });
});

describe('areWeCovered', () => {
    const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
    { name: "Alice", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Mike", rota: ["Saturday", "Sunday", "Friday", "Wednesday"] }]
    test('check that the day appears in the rota at least 3 times  ', () => {
        expect(areWeCovered(staff, 'Saturday')).toBe(true);

        expect(areWeCovered(staff, 'Wednesday')).toBe(true);

        expect(areWeCovered(staff, 'Monday')).toBe(false);
    });
    test('Day does not exist', () => {
        expect(areWeCovered(staff, 'Kent')).toBe(false);
    });
    test('not case sensitive ', () => {
        expect(areWeCovered(staff, 'wednesday')).toBe(true);
    });
    test('duplication of day, is counted once ', () => {
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday", 'Monday'] },
        { name: "Pedro", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        { name: "Alice", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Mike", rota: ["Saturday", "Sunday", "Wednesday"] }], 'monday')).toBe(false);
    });
});


