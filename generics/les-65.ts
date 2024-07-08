class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  if (vehicle instanceof LCV) {
    vehicle.kpp;
  }
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  kpp: string;
}

const lcv = kmToMiles(new LCV());

//  в простих типах приклад extends

function logId<T extends string | number>(id: T): T {
  console.log(id);
  return id;
}

//  можна використати у функції більше ніж один generic

function logId1<T extends string | number, Y>(
  id: T,
  dateAt: Y
): { id: T; date: Y } {
  console.log(id);
  console.log(dateAt);
  return { id, date: dateAt };
}
