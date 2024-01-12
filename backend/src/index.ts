import app from "./app.js"
import {connectToDatabase} from "./db/connection.js"
//connections and listeners

const PORT=process.env.PORT || 3000;
connectToDatabase().then(()=>{
  app.listen(PORT,()=>console.log("Server Open & Connected To DataBase"))
}).catch((err)=>console.log(err));