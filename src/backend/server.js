import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DatabaseConnection from './config/dbSetup.js';
import postRoutes from './routes/postRoutes.js'
import cors from "cors";

//initialize database connection 
DatabaseConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server started on port',PORT);
})