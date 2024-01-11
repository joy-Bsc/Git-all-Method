const {client} = require("./dbConfig")

const insertMultipleDoc = async()=>{
    try {

        const database = client.db("office");
        const users = database.collection("officer");
        const doc =
        [
            {
            name:"Joy Dhar",
            address:"Kalitola",
            district:"Naogaon",
            study:"B.Sc(Engg)"
        },
        {
            name:"Tapos Dhar",
            address:"Kalitola",
            district:"Naogaon",
            study:"B.Sc(Engg)"
        },
        {
            name:"Ety Dhar",
            address:"Kalitola",
            district:"Naogaon",
            study:"B.Sc(Engg)"
        },
        {
            name:"Jhilam Dhar",
            address:"Barisal",
            district:"Barisal",
            study:"Forever"
        },
        {
            name:"Riya Dhar",
            address:"Kalitola",
            district:"Naogaon",
            study:"8"
        }
        ]
        const result = await users.insertMany(doc);
        console.log(`document were inserted: ${result.insertedCount}`);
        
    } catch (error) {
        
       console.log(error);
    }
    finally{

        await client.close();

    }
}
insertMultipleDoc();