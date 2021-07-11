import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://admin:TranChuong22662@cluster0.4ddto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts);

mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to db');
        app.listen(PORT, () => {
            console.log(`Server is runing on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err)
    })
