const sqlite3 = require("sqlite3").verbose()

const db =new sqlite3.Database("./collection.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log("logged in")
}
);

db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS accounts(
            id INTEGER PRIMARY KEY,
            username varchar(20),
            password varchar(255),
            amount INTEGER,
            account_id INTEGER

        )`
    )
})
