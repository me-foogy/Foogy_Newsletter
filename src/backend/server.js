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




app.listen(5000,()=>{
    console.log('Server started on port 5000');
})