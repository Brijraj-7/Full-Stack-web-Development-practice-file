const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allchat = [
  {
    from: "Ram",
    to: "Sita",
    msg: "Hi",
    created_at: new Date(),
  },
  {
    from: "jiten",
    to: "harsh",
    msg: "Hi Harsh",
    created_at: new Date(),
  },
  {
    from: "Jay",
    to: "Brij",
    msg: "Hello Brij",
    created_at: new Date(),
  },
  {
    from: "ved",
    to: "abhi",
    msg: "Hi i am ved",
    created_at: new Date(),
  },
  {
    from: "bob",
    to: "aogy",
    msg: "bob bob ",
    created_at: new Date(),
  },
  {
    from: "jek",
    to: "bob",
    msg: "tod duga fod duga",
    created_at: new Date(),
  },
  {
    from: "abc",
    to: "def",
    msg: "hi nrigkls",
    created_at: new Date(),
  },
  {
    from: "bdsu",
    to: "dkgndsi",
    msg: "kgndli",
    created_at: new Date(),
  },
  {
    from: "ljsdsl",
    to: "Akjsf",
    msg: "nfjas afikcas  ifjisc a",
    created_at: new Date(),
  },
];

Chat.insertMany(allchat);
