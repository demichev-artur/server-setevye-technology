import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import fileRoutes from "./routes/fileRoutes.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (res,req) => {
    res.status(200).send("Server OK");
});


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Connect DB success"))
    .catch(err=>console.log("Error connecting to DB", err));

// Маршруты для загрузки файлов
app.use("/api/files", fileRoutes);


app.listen(5051,()=>{
    console.log(`Server is running at localhost:${process.env.PORT}`);
})