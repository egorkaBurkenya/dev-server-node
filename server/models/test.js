const db = require('mongoose');

const dbUser = process.env.dbUser || "root";
const dbPassword = process.env.dbPassword || "Vx6zbmVpNGQka8oR";

const dbName = "test";
 
const path = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.tsfvr.mongodb.net/${dbName}?` + 
"retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log("cannot connect to database🧐");
});

const TestSchema = new db.Schema({
    name: String,
    count: Number,
    isActive: Boolean,
    description: String
});

const Tests = db.model("tests", TestSchema);
module.exports = Tests;
