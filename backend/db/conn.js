const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, { useUnifiedTopology: true });

let dbConnection;

module.exports = {
    connectToServer: async function (callback) {
        await client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("CancerApp");
            // console.log(dbConnection);
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};
