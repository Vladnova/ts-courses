function lodId(id: number | string): void {
  console.log(id);
}

const result = lodId(1);

type voidFn = () => void;

const fn1: voidFn = () => {
  console.log("message");
};

const fn2: voidFn = () => {
  return true;
};

const a = fn2();


/*
 void  відрізняється від undefind тим, що при void  функція може повертати, 
 що завгодно, але це повернення буде ігноруватися. а при undefind функція нічого не має повертати
  */

const skills5 = ['Dev', 'DevOps', 'Testing'];

const users =  {
    prof: ['DB']
}

skills5.forEach(skill =>users.prof.push(skill))