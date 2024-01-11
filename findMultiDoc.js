const {client} = require("./dbConfig");

const findMultipleDoc = async()=>{

    try {
        const database = client.db("office");
        const users = database.collection("officer");
        const query ={};

        const cursor = users.find(query);

        if((await cursor.EstimatedDocumentCount)===0){
            console.log("No documents found");
        }
        else{
            const user = await cursor.toArray();

            user.forEach(users=>console.log(users))
        }

        
    } catch (error) {
         
        console.log(error);
    }
    finally{
         
        await client.close();
    }
}
findMultipleDoc();