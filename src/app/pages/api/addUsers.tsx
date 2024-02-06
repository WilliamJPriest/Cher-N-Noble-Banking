// const sqlite3 = require("sqlite3").verbose()

// const db =new sqlite3.Database("./collection.db",
//     sqlite3.OPEN_READWRITE,
//     (err) =>{
//     if (err){
//         return console.error(err.message);
//     }
//     console.log("logged in")
// }
// );
// function addUser(){
//     db.serialize(()=>{
//         db.run(
//             ``
//         )
//     })    
// }
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
