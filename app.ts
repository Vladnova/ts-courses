function getFullName(firstName:string, surname: string): string {
  return `${firstName} ${surname}`;
}

const getFullNameArrow = (firstName: string, surname: string): string => {
  return `${firstName} ${surname}`;
};



console.log(getFullName('Vlad', 'Novalenko'));