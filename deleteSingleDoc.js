const {client} = require("./dbConfig");
const deleteSingleDoc = async()=>{
    try {
        const database = client.db("office");
        const users = database.collection("officer");
        const query = {name:"Joy Dhar"};
        const result = await users.deleteOne(query);
        if(result.deletedCount===1){
            console.log("Successfully delete");

        }
        else{
            console.log("no document found");
        }
    } catch(error){

        console.log(error);
    }finally{

        await client.close();
    }
}
deleteSingleDoc();
