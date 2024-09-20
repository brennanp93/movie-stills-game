const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"movieList.js");

const movieList = require("./movieList")

function generateSequentialDates(startDate, numberOfDays){
  const dates =[]
  let currentDate = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate);
    dates.push(date.toLocaleDateString("en-US"));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates
}

const sequentialDates = generateSequentialDates(new Date(), movieList.length)

movieList.forEach((movie, index) => {
  movie.activeDate = sequentialDates[index]
});

const updatedData = `const movieList = ${JSON.stringify(movieList, null, 2)};\n\nmodule.exports = movieList;`;

fs.writeFile(filePath, updatedData, "utf8", (err)=>{
  if (err) {
    console.error("error writing to the file", err);
    return;
  }
  console.log("success")
})

// console.log(movieList)