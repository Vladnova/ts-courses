const num: Array<number> = [1, 5, 5];

const first = async () => {
  const res = await new Promise<number>((res, rej) => {
    res(2);
  });
};


const check:Record<string, boolean> = {
    kpp : true,
    drive: false,
    key: false
}