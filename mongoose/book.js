const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("hello connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/books");
}

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Math",
  author: "RD Sharma",
  print: 1200,
});
book1.save();
