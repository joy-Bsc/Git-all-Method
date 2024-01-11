const {client} = require("./dbConfig");
const updateMultipleDoc = async()=>{
    try {
        const database = client.db("office");
        const users = database.collection("officer");

        const filter ={};
        const updateDoc={
            $set:{
                isEmployee: true
            },
        };
        const result = await users.updateMany(filter,updateDoc);
        console.log("Updated successfully");
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
updateMultipleDoc();