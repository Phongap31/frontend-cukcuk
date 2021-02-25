//Mylib.js
let exports = {};

// this (vue instance) is passed as that , so we
// can read and write data from and to it as we please :)
exports.myfuncA = () => {
  console.log('function a');
};

exports.myfuncB = (that) => {
  that.message =
  "you hit ''myfuncB'' function that is located in Mylib.js and now I will change the name to Nassim";
  that.name = "Nassim"; // <-- change name to Nassim
};

exports.myfuncC = (that) => {
  that.message =
  "you hit ''myfuncC'' function that is located in Mylib.js and now I will change the name back to Bob";
  that.name = "Bob"; // <-- change name to Bob
};

export default exports;