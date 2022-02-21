const fs = require('fs');
const createNewSchema = require('./schema.js');

const getName = data => {
    if (data[data.length - 1] !== "s") {
        return data += "s"
    }
    return data
}

const addRecord = async (req, res) => {
    console.log(req.query);
    const Schema = require(`../models/${req.params.name}.js`);
    await new Schema({...req.query}).save();
    res.json({message: "All correct!♥️"});

} 

const createSchema = (req, res) => {
    let schemaName = getName(req.params.name);
    console.log(req.body);
    const fileData = createNewSchema(req.params.db, schemaName, JSON.stringify(req.body))

    fs.writeFile(`./server/models/${schemaName}.js`, fileData, function (err) {
        if (!err) {
            res.json({message: "All correct!♥️"});
        }
        res.send(err);
    })
}

module.exports = {addRecord, createSchema};