const sqlite3 = require("sqlite3").verbose()

const db = sqlite3.Database("./collection",
    sqlite3.OPEN_WRITE | sqlite3.OPEN_CREATE,
    (err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log("logged in")
}
);

db.serealize(()=>{
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

export {}