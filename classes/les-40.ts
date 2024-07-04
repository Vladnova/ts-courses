// class Users {
//     skills: string[]

//     addSkill(skill:string | string[]):void{
//         if(Array.isArray(skill)){
//             this.skills.push(...skill)
//         }else{
//             this.skills.push(skill)
//         }
//     }
// }

//  перезагрузка методів у класі

class Users {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (Array.isArray(skillOrSkills)) {
      this.skills.push(...skillOrSkills);
    } else {
      this.skills.push(skillOrSkills);
    }
  }
}

new Users().addSkill("Dev");

//  перезагрузка функцій в коді
function run(dist: number): number;
function run(dist: string): string;
function run(dist: number | string): string | number {
    if(typeof dist === 'string'){
        return ''
    }else {
        return 2
    }
}
