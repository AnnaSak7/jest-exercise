// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

export function findOutlier(integers: number[]): number {
  // your code here
  let evenOrOdd = integers.map((integer: any) =>
    integer % 2 === -1 ? 1 : integer % 2
  );
  return evenOrOdd.reduce((a: number, b: number) => a + b) === 1
    ? integers[evenOrOdd.findIndex((x) => x === 1)]
    : integers[evenOrOdd.findIndex((x) => x === 0)];
}

//one ==============================================

export function reverseWords(str: string) {
  // your code here
  const reverse = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  return reverse.join(" ");
}

//two ===============================================

export function convertToRoman(num: number): string {
  const roman = {
    one: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    hundred: "C",
    fiveHundred: "D",
    thousand: "M",
  };

  // making the num arguments into string
  //splitting it into separate numbers
  //putting them into an array
  //reverse the order of items in the array
  let arr: any = num.toString().split("").reverse();
  arr: [] = arr.map((a: string) => parseInt(a));
  console.log(arr);

  // function to have the same roman number repeatedly such as III
  const nums = (num: number, rom: string) => {
    let letter = "";
    for (let i = 0; i < num; i++) {
      letter = letter + rom;
    }
    return letter;
  };

  // function taking one digit to decide which number it is from 1 - 9 and takes roman# as argument that gives right roman number accordingly
  const oneFive = (arr: number, one: string, five: string, ten: string) => {
    return arr > 5 && arr < 9
      ? five + nums(arr - 5, one)
      : arr < 4 && arr > 0
      ? nums(arr, one)
      : arr === 4
      ? one + five
      : arr === 9
      ? one + ten
      : arr === 5
      ? five
      : "";
  };

  // putting all roman numbers of all the separated digit to a string variable of z
  let z = "";
  z = arr[3] ? oneFive(arr[3], roman.thousand, "None", "None") : "";
  z = arr[2]
    ? z + oneFive(arr[2], roman.hundred, roman.fiveHundred, roman.thousand)
    : z;
  z = arr[1] ? z + oneFive(arr[1], roman.ten, roman.fifty, roman.hundred) : z;
  z = arr[0] ? z + oneFive(arr[0], roman.one, roman.five, roman.ten) : z;

  return z;
}

// function solution(number){
//   // convert the number to a roman numeral
// var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

// var ans = '';
// while(number>0){
//     for(a in roman){
//         if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

//     }
// }
// return ans;
// }

// find one unique number in an array of numbers

// three ===============================================

export function findUniq(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

// four =================================================
export function multiplicationTable(size: number): any {
  // Implement me! :

  const result: number[][] = [];

  for (let i: number = 1; i <= size; i++) {
    const arr: number[] = [];
    for (let j: number = 1; j <= size; j++) {
      if (j <= size) {
        arr.push(i * j);
      }
    }
    result.push(arr);
  }
  return result;
}

// five =======================================
export function twoSum(numbers: number[], target: number) {
  // ...
  let index: number[] = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let left = target - numbers[i];
    for (let j = 1; j < numbers.length; j++) {
      if (left === numbers[j]) {
        return (index = [i, j]);
      }
    }
  }
  return index;
}

// six ====================================================

export const towerBuilder = (nFloors: number): string[] => {
  // build here
  const nbottomStars: number = nFloors * 2 - 1;
  let tower: string[] = [];

  for (let i = 0; i < nFloors; i++) {
    tower.unshift(
      `${" ".repeat(i)}${"*".repeat(nbottomStars - 2 * i)}${" ".repeat(i)}`
    );
  }

  return tower;
};

// seven ======================================================

export function partsSums(ls: number[]): number[] {
  let sum: number =
    ls.length > 0
      ? ls.reduce((previousValue, currentValue) => previousValue + currentValue)
      : 0;
  let result: number[] = [sum];
  if (ls.length > 0) {
    for (let i = 0; i < ls.length; i++) {
      result.push((sum -= ls[i]));
    }
  }
  return result;
}

// eight =======================================================

class Handshakes {
  handshakes: number;
  constructor(handshakes: number) {
    this.handshakes = handshakes;
  }

  countPpl() {
    let sum: number = 0;
    let ppl: number = 0;
    while (sum < this.handshakes) {
      sum += ppl;
      ppl++;
    }
    return ppl;
  }
}

export function getParticipants(handshakes: number): number {
  const x = new Handshakes(handshakes);
  return x.countPpl();
}

//nine ===========================================================

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  // your code
  let a1Sorted: any = a1 != null ? a1.sort((a, b) => a - b) : [null];
  let a2Sorted: any = a2 != null ? a2.sort((a, b) => a - b) : [null];

  const equals = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

  return equals(
    a1Sorted,
    a2Sorted.map((c: any) => Math.sqrt(c))
  );
}
