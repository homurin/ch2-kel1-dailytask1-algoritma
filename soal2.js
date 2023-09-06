const users = require("./users.js").users;

function countUserGender(data) {
  let maleCount = 0;
  let femaleCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].gender === "female") {
      femaleCount += 1;
    } else {
      maleCount += 1;
    }
  }
  return `Male : ${maleCount}\nFemale : ${femaleCount}`;
}

console.info(countUserGender(users));
