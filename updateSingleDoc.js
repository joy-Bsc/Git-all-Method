const {client} = require("./dbConfig");

const updateSingleDoc = async()=>{

    try {
        const database = client.db("office");
        const users = database.collection("officer");
        const filter ={name:"Joy Dhar"};
        const options = {upsert:true};
        const updateDoc ={
            $set: {
                country:"Bangladesh"
            },
        };
        const result = await users.updateOne(filter,updateDoc,options);
        console.log("updated successfully");
    }
    catch(error){
      
        console.log(error);
    }
    finally{

        await client.close();
    }
}
updateSingleDoc();