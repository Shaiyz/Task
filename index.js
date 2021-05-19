import express from 'express';
import route from '/route.js'

const app=express();

app.use(express.json())

app.use('/api/orders', route)
       
const port=5000;

app.listen(port,console.log("server is running"));