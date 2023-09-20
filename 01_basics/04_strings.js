const Name = 'guru';
const repoCount = 11.5;

console.log(`hello my name is ${Name.toUpperCase()} and my repo count is ${Math.round(repoCount)}`);
console.log(Name[0]);

const gameName = new String('God of war');
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

let newString = gameName.substring(0, 6);
console.log(newString);

     newString = gameName.slice(0, 4);
     console.log(newString);

     let stringOne = "    jeremy     ";
     
     console.log(stringOne);
     console.log(stringOne.trim());
   
     const para = "help someone is good";

     console.log(para.replace('good', 'bad'));
  console.log(para.includes('carry'));
  console.log(para.includes('good'));
  console.log(para.includes('bad'));

  const para2 = 'harry-is-a-good-boy';

  console.log(para2.split('-'));

  