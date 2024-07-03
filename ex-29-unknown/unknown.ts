/*
    відмінність unknown на відміну від інший явних типів, в тому, що він не звужає типи, 
    як бачимо у функції ми в if  перевірили на явний тип number, але в else i  досі тип unknown 
    тому при unknown потрібно робити перевірку на тип, і тільки тоді буде виконувати дії    
 */

let input: unknown;

input = "test";
input = 6;

const te: number = input; // тут буде помилка, оскільки ме явно вказали, що тип number має бути, але якщо ми вкажемо тип any у input
// то все буде працювати, це ще одна відмінність від unknown від any

function checkTypeInput(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}

checkTypeInput(input);

async function getData() {
  try {
    await fetch("");
  } catch (error: any) {
    // після версії ts 4.4 тепер тип error завжди по дефолту unknown,
    //і якщо ми явно не будемо переназначати тип error на any  то потрібно в catch зробити додаткову перевірку
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

// другий варіант, але не рекомендується аunknownрисвоєння через as Error, бо в нас може бути error  срокою, і тоді буде помилка при виклику  error.message

async function getDataForce() {
  try {
    await fetch("");
  } catch (error: any) {
    const e = error as Error;

    console.log(error.message);
  }
}


type name = unknown | string; //  в union type якщо один тип буде unknown то він ьуде перебивати інший тип, і перемінна буде завжди з типом unknown
type it = unknown | string; // а в такому випадку  при інтерсексині навпаки, оскільки unknown більш ширший тип