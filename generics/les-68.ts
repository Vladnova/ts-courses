type Constructor = new (...args: any[]) => {};

type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpened: boolean;
}

type ListT = GConstructor<List>;
type AccordionT = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    this.items[0];
  }
}

// mixins

function ExtendedList<TBase extends ListT & AccordionT>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);

const res4 = new list(["first", "second"]);
console.log(res4.first());
