const mongoose = require("mongoose");
const Issue = require("../models/issues.js");
const initdata = require("./data.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/FixMate';

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Connection failed:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        await Issue.deleteMany({});
        await Issue.insertMany(initdata.data);
        console.log("Data reinitialized");
    } catch (err) {
        console.error("Error seeding data:", err);
    } finally {
        mongoose.connection.close();
    }
};

initDB();
