
interface Magician {
  name: string;
}

const magicians: Magician[] = [
  { name: "Usman" },
  { name: "Zakir" },
  { name: "Shahid" }
];

function makeGreat(magicians: Magician[]): void {
  for (let magician of magicians) {
    magician.name = `the Great ${magician.name}`;
  }
}

function showMagicians(magicians: Magician[]): void {
  for (let magician of magicians) {
    console.log(magician.name);
  }
}

makeGreat(magicians);
showMagicians(magicians);


