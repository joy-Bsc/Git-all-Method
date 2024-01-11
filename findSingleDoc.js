const {client} = require("./dbConfig");

const findSingleDoc = async()=>{
    try {
        
        const database = client.db("office");
        const users = database.collection("officer");

        const query = {district:"Naogaon", study:"8"};

        const result = await users.findOne(query);
        console.log(result);

    } catch (error) {
        
    }
    finally{

        await client.close();
    }

}
findSingleDoc();