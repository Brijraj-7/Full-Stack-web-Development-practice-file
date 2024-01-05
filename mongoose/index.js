const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("hello connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  agr: Number,
});

const User = mongoose.model("User", userSchema);

User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.insertMany([
//   { name: "Brij", email: " brij@gmail.com", agr: 21 },
//   { name: "Amogh", email: " amogh@gmail.com", agr: 21 },
//   { name: "Harsh", email: " harsh@gmail.com", agr: 21 },
// ]);

// const User1 = new User({
//   name: "Ram",
//   email: "ram123@gmail.com",
//   agr: 21,
// });

// User1.save();
