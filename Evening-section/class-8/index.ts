let myname = 5555;
// if(typeof myname == "string"){
//     myname.length;
// }
console.log((myname as unknown as string).length);

// console.log(typeof myname);

// let num = '15';

// num.length;

// console.log((<string> myname).length)
// let myname = 5555;
let newValue = myname.toString(); // "5555"  // type converstion

// console.log(typeof newValue);

// console.log(typeof myname)

// let name1 : unknown =  54655;

// name1.toString()
//==================================

// ENUM

// enum Color {
//   Red,
//   Green,
//   Blue,
// } //starts with 0
// var c: Color = Color.Green;

// //0  1      2
// enum matchResult {
//   win2 = "win",
//   lose = "lose",
//   draw = "draw",
// }

// let indScore = 200;
// let pakScore = 201;

// if (pakScore > indScore) {
//   console.log(`Pakistan ${matchResult["win"]}`);
// } else if (indScore > pakScore) {
//   console.log(`Pakistan ${matchResult.lose}`);
// } else {
//   console.log("Match" + matchResult.draw);
// }

// enum Color1 {
//   Red = 1,
//   Green,
//   Blue,
// }
// var colorName: string = Color1[2];
// // console.log(colorName);

// enum Color2 {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// } //can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

enum Color1 {
  Red,
  Green,
  Blue,
}
Color1[1]
const enum Color {Red, Green, Blue};

// Color[1]



enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 3,
  purple= 2,
  skyBlue
}

console.log("indexes of Color2 ", Color2[3]);
