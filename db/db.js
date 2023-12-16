import mongoose from "mongoose"
const connect = async () => {

    try{

        const dbInstance = await mongoose.connect(process.env.MONGO_URL + process.DBNAME);
        console.log("Connect to the database", dbInstance.connection.host);
        
    }catch(err){
        console.log(err);
        return 
    }
}

export default connect;