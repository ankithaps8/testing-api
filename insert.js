const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url="mongodb+srv://ankips:ankithag58@cluster0.rljbg.mongodb.net/?retryWrites=true&w=majorityconst client = new MongoClient(url)";
const client = new MongoClient(url);
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("mrkt_items");

         // Construct a document                                                                                                                                                              
         let microchips = {
            "recordno":94,
             "cat_id": 14,
             "name":"Petlink",
             "weblink":"https://www.petlink.net/",
             "status":  1, 
             "originID_":"vetonadmin94"                                                                                                                             

         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(microchips);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
