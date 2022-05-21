export function zero(func?: Function) {
  return func ? func(0) : 0;
}
export function one(func?: Function) {
  return func ? func(1) : 1;
}
export function two(func?: Function) {
  return func ? func(2) : 2;
}
export function three(func?: Function) {
  return func ? func(3) : 3;
}
export function four(func?: Function) {
  return func ? func(4) : 4;
}
export function five(func?: Function) {
  return func ? func(5) : 5;
}
export function six(func?: Function) {
  return func ? func(6) : 6;
}
export function seven(func?: Function) {
  return func ? func(7) : 7;
}
export function eight(func?: Function) {
  return func ? func(8) : 8;
}
export function nine(func?: Function) {
  return func ? func(9) : 9;
}

export function plus(b: number) {
  return function (a: number) {
    return a + b;
  };
}
export function minus(b: number) {
  return function (a: number) {
    return a - b;
  };
}
export function times(b: number) {
  return function (a: number) {
    return a * b;
  };
}
export function dividedBy(b: number) {
  return function (a: number) {
    return a / b;
  };
}

export function sumPairs(ints: number[], s: number): [number, number] | void {
  var arr: number[][] = [];
  for (let i: number = 0; i < ints.length - 1; i++) {
    for (let j: number = i + 1; j < ints.length; j++) {
      if (s === ints[i] + ints[j]) {
        arr.push([i, j]);
      }
    }
  }

  var index: number[] = arr.map((a) => Math.max(...a));

  return arr.length === 1
    ? [ints[arr[0][0]], ints[arr[0][1]]]
    : index.length > 1
    ? [
        ints[arr[index.indexOf(Math.min(...index))][0]],
        ints[arr[index.indexOf(Math.min(...index))][1]],
      ]
    : undefined;
}
