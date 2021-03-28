
import { MongoClient } from "mongodb";
const client = new MongoClient(
    "mongodb://mongo:27017", 
    { useUnifiedTopology: true, }
);

class Database {
    public db: any;
    static DB_NAME = "BOOKINGS";
    
    async init() {
        console.log("Connecting to mongo server");
        await client.connect();
        this.db = client.db(Database.DB_NAME);

        // Just wipe here for demo purposes
        await this.db.dropDatabase();

        console.log("Connected to mongo server");
    }
}

export const DATABASE = new Database();