const {client} = require("./dbConfig")

const insertSingleDoc = async()=>{
    try {

        const database = client.db("office");
        const users = database.collection("officer");
        const doc ={
            name:"Joy Dhar",
            address:"Kalitola",
            district:"Naogaon",
            study:"B.Sc(Engg)"
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
    } catch (error) {
        
       console.log(error);
    }
    finally{

        await client.close();

    }
}
insertSingleDoc();