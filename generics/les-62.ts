function logMiddleware<T>(date: T): T {
  console.log(date);
  return date;
}

const t = logMiddleware<string>("5");

interface IObj {
  name: string;
  age: number;
  isAdult: boolean;
}

const testObj: IObj = {
  name: "Vlad",
  age: 30,
  isAdult: true,
};

const v = logMiddleware<IObj>(testObj);

function getSplitHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

const arr1 = getSplitHalf<number>([1, 2, 3, 4, 5, 6, 7]);
const arr2 = getSplitHalf<boolean>([true, false, true, true, false, false]);

console.log(arr1);
console.log(arr2);
