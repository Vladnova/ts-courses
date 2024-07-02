function getFullName(userInfo: { firstName: string; surname: string }): string {
  return `${userInfo.firstName} ${userInfo.surname} `;
}

const user = {
  firstName: "Dmytro",
  surname: "Dorosh",
  city: "Lviv",
  age: 30,
};

getFullName(user);
// arry types
const skills: string[] = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
  console.log(skill);
}

skills.filter((s) => s !== "DevOps");

// tuples

const newSkills: [string, number] = ["Dev", 1];

newSkills.push("testing");
console.log(newSkills);
const s = newSkills[0];
const b = newSkills[1];

const arr: [string, number, ...boolean[]] = ["test", 2, true, false];

// readOnly

const skills2: readonly [string, number] = ["dev", 5];

// enums

enum statusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILD,
}

const res = {
  message: "success",
  statusCode: statusCode.SUCCESS,
};

// 1 - успішно
// 2 - в процесі
// 3  відхилено

// function

enum statusReq {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

async function getFaqs(req: { tipicId: number; status?: statusReq }): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: statusReq;
  }[]
> {
  const res = await fetch("./faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });

  const data = await res.json();
  return data;
}

//union

function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  } else if (typeof id === "number"){
    console.log(id)
  }else {
    console.log(id)
  }
}

function logError(err: string | string[]) {
  if(Array.isArray(err)) {
    console.log(err)
  }else {
    console.log(err)
  }

}

function logObj(obj: {a: number} | {v: number}) {
  if('a' in obj) {
    console.log(obj.a)
  }else{
    console.log(obj.v)
  }
}

function logMultipleIds(a:string | number, b: string | boolean) {
  if(a===b) {
    console.log(a)
  }else {
    console.log(a)
  }
}