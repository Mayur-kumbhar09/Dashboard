import express from "express"
import cors from "cors"
const PORT = process.env.Port || 8081;

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(cors())

app.post(`/userLogin`,(req,res)=>{
    console.log("User Data 1 is: ", req.body);
    res.send("data received Succesfully!!!!");
})
app.post(`/userRegistration`,(req,res)=>{
    console.log("User Data 1 is: ", req.body);
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
