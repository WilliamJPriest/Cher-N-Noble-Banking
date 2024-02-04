const sqlite3 = require("sqlite3").verbose()

const db =new sqlite3.Database("./collection.db",
    sqlite3.OPEN_READWRITE,
    (err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log("logged in")
}
);
function addUser(){
    db.serialize(()=>{
        db.run(
            ``
        )
    })    
}

module.export = addUser()