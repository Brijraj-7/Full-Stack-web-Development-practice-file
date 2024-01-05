var figlet = require("figlet");

figlet("Brijrajsinh Mori", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});