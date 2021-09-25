const generatePage = require("./src/page-template");
const fs = require("fs");
const profileDataArgs = process.argv.slice(2);
const [nameUser, github] = profileDataArgs;

fs.writeFile("index.html", generatePage(nameUser, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});
