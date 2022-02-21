const createSchema = (
    dbName, schemaName, body, 
    dbUser = process.env.dbUser || "root", 
    dbPassword = process.env.dbPassword || "Vx6zbmVpNGQka8oR"
    ) => {
    return `
const db = require('mongoose');
const path = \`mongodb+srv://${dbUser}:${dbPassword}@cluster0.tsfvr.mongodb.net/${dbName}?\` 
+ "retryWrites=true&w=majority";
db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log("cannot connect to database🧐");
});
const Schema = new db.Schema(${body});
const ${schemaName} = db.model("${schemaName}", Schema);
module.exports = ${schemaName};
    `
}

module.exports = createSchema;