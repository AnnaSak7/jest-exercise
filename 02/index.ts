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

export function findUniq(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}
