interface ID {
  id: number;
}

const data = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
];
function sortArr<T extends ID>(data: T[], type: "asc" | "desc" = "asc"): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case "asc":
        return a.id - b.id;
      case "desc":
        return b.id - a.id;
      default:
        const _: never = type;
        throw new Error("type is not found");
    }
  });
}

console.log(sortArr(data, "desc"));
console.log(sortArr(data));
