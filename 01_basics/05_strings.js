const name = "afeef"
const repoCount = 50

//console.log(name + repoCount + " Value"); //out dated

console.log(`Hellow my name is ${name} and repo count is ${repoCount}`);

const gameName = new String("AfeefSohail")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));
console.log(gameName.substring(0 , 4));// end postion not included
console.log(gameName.slice(0, 4));// end postion not included
console.log(gameName.slice(-8, 5)); // end and start postion not included
console.log(gameName.trim());//remove starting and end spaces
console.log(gameName.trimStart());//remove starting spaces
console.log(gameName.trimEnd());//remove end spaces

const url = "https://afeef.com/afeef%20sohail%20jutt"
console.log(url.replace('%20', '-'));

console.log(url.includes('afeef'));

const newStr = "Afeef_Sohail_Anwar"
console.log(newStr.split('_'));





